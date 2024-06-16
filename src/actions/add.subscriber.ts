"use server";

import { myContactFormFields } from "@/components/ContactUsForm";
import { NextResponse } from "next/server";

export async function addSubscriber(data: myContactFormFields) {
  console.log(data);

  /// campaings endpoint: https://campaigns.accufyapps.com/api/v1
  /// api token:  RNm0hO0zXPTistXqqs5ULv5T35EM3vzwDDqM26mtew2RzdGmwiE4CXB8r1FZ
  // list id:  666dcfc05a34b
  /* 
    curl -X POST -H "accept:application/json" -G \ 
    https://campaigns.accufyapps.com/api/v1/subscribers \
    -d api_token=RNm0hO0zXPTistXqqs5ULv5T35EM3vzwDDqM26mtew2RzdGmwiE4CXB8r1FZ \
    -d list_uid={list_uid} \
    -d EMAIL=test@gmail.com \
    -d tag=foo,bar,tag+with+space, \
    -d FIRST_NAME=Marine \
    -d LAST_NAME=Joze \
    -d status=subscribed
    */

  //const dataOut = JSON.parse(JSON.stringify("data"))

  return NextResponse.json({ status: 200 });
}
