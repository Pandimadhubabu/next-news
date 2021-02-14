import Head from "next/head";
import PostPreview from "../components/PostPreview";
import PostHero from "../components/PostHero";
import { getHeadlines } from "../lib/api";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const headlines = [
    {
      category: "general",
      color: "from-yellow-400 to-red-600",
      results: await getHeadlines({ category: "general", pageSize: 10 }),
    },
    {
      category: "sport",
      color: "from-green-400 to-blue-600",
      results: await getHeadlines({ category: "sport", pageSize: 10 }),
    },
    {
      category: "science",
      color: "from-purple-400 to-red-500",
      results: await getHeadlines({ category: "science", pageSize: 10 }),
    },
    {
      category: "technology",
      color: "from-pink-400 to-green-600",
      results: await getHeadlines({ category: "technology", pageSize: 10 }),
    },
  ];

  return {
    props: {
      headlines,
    },
  };
}

export default function Home({ headlines, preview }) {
  return (
    <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            News
          </h2>
          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6  max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
              <div className="w-full">
                <label for="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/search"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    placeholder="Search"
                    autoComplete="off"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {headlines.map((section, i) => {
          const hero = section.results.articles[0];
          return (
            <section>
              <PostHero
                key={hero.url}
                category={section.category}
                title={hero.title}
                url={hero.url}
                urlToImage={hero.urlToImage}
                background={section.color}
              />

              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {section.results.articles.slice(1).map((article) => (
                  <PostPreview
                    key={article.url}
                    title={article.title}
                    description={article.description}
                    content={article.content}
                    url={article.url}
                    urlToImage={article.urlToImage}
                    publishedAt={article.publishedAt}
                    author={article.author}
                    source={article.source.name}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
