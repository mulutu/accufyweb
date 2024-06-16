import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const { firstName, lastName, email, comment } = await req.json();
  console.log(firstName, lastName, email, comment);

  return NextResponse.json({ status: 200 });
  
};
