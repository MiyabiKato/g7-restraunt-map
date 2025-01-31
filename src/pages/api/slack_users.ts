import { WebClient } from "@slack/web-api";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_SLACK_ACCESS_TOKEN;
const CHANNEL_ID = "C04L0V5MTUK";

// Initialize
const client = new WebClient(ACCESS_TOKEN);

export default async function handler(_, res) {
  let result;
  try {
    result = await client.users.list();

    console.log(result);
  } catch (e) {
    console.log(e);
  }

  res.status(200).json(result?.members);
}
