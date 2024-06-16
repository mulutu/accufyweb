import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const accufyUrl = process.env.ACCUFY_CAMPAIGNS_API_URL!;
const accufyAPIToken = process.env.ACCUFY_CAMPAIGNS_API_TOKEN;
const listUID = process.env.ACCUFY_CAMPAIGNS_LIST_UID;

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { firstName, lastName, email, comment } = await req.json();
  console.log(firstName, lastName, email, comment);

  try {
    const { data, status } = await axios.post(
      accufyUrl + "?api_token=" + accufyAPIToken,
      {
        list_uid: listUID,
        EMAIL: email,
        tag: "contact-us",
        FIRST_NAME: firstName,
        LAST_NAME: lastName,
        status: "subscribed",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (status !== 200) {
        console.log(data.error);
      return NextResponse.json({ data: data.error }, { status: status });
    }
    return NextResponse.json({ data: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ data: error }, { status: 500 });
  }
};
