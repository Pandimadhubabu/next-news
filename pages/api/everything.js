import { getEverything } from '../../lib/api'

export default async (req, res) => {
  try {
    const results = await getEverything(req.query);
    return res.status(200).json(results);
  } catch (err) {
    return res.status(400).json(err);
  }
};
