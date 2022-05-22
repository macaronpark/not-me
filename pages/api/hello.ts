// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let name = Math.random() < 0.5 ? "Suzy" : "HC";
  res.status(200).json({ name: name });
}
