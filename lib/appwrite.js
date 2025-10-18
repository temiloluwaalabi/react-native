import { Account, Avatars, Client, Databases } from "react-native-appwrite";

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
  .setPlatform("com.davidleotech.native");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const database = new Databases(client);
export default client;
