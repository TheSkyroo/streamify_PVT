import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STEAM_API_key;
const apiSecret = process.env.STEAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("stream API key or Secret is missing");
}


const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]); //upsert means create or update if already exists
    return userData;
  } catch (error) {
    console.error("Erro upserting Streamuser:", error);
  }
};



export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};
