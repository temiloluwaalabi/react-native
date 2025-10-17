import { Account, Avatars, Client } from "react-native-appwrite";

const client = new Client()
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
  .setPlatform("com.davidleotech.native");

export const account = new Account(client);
export const avatars = new Avatars(client);
