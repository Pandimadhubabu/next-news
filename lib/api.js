const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

import { everythingParameters, headlineParameters } from "./parameters";

export async function getHeadlines(queryParameters = {}, showHeaders = false) {
  const parameters = mergeParameters(headlineParameters, queryParameters)
  const results = await newsapi.v2.topHeadlines(parameters, {
    showHeaders: showHeaders,
  })
  return { ...results, parameters: parameters }
}

export async function getEverything(queryParameters = {}, showHeaders = false) {
  const parameters = mergeParameters(everythingParameters, queryParameters)
  const results = await newsapi.v2.everything(parameters, {
    showHeaders: showHeaders,
  })
  return { ...results, parameters: parameters }
}

export function mergeParameters(defaultParameters, queryParameters) {
  Object.keys(defaultParameters).forEach((key) => {
    const parameter = defaultParameters[key]
    queryParameters[key] =
      queryParameters[key]?.toString().toLowerCase().trim() ?? parameter.default
  });

  return queryParameters
}
