import type { NextApiRequest, NextApiResponse } from "next";
import type { Repo } from "../../types";
import repoSource from "../../repo.json";

export default function categoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse<Repo[]>
) {
  const categories = repoSource as unknown as Repo[];
  return res.status(200).json(categories);
}
