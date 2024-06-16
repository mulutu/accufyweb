'use server';

import { myContactFormFields } from "@/components/ContactUsForm";
import { NextResponse } from "next/server";

export async function addSubscriber(data: myContactFormFields) {
  console.log(data);

  //const dataOut = JSON.parse(JSON.stringify("data"))

  return NextResponse.json({ status: 200 });
}