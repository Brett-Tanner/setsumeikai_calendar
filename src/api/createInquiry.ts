import { Params } from "react-router-dom";

export default async function createInquiry(
  _params: Params<string>,
  request: Request
) {
  const data = await request.formData();
  const inquiryObject = Object.fromEntries(data);
  delete inquiryObject.schoolId;
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const response = await fetch("http://localhost:3000/create_inquiry.json", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ inquiry: inquiryObject }),
  });

  return { response: response, inquiryObject: inquiryObject };
}
