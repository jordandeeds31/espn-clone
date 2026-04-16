import axios from "axios";

export const mlbApiClient = axios.create({
  baseURL: "https://statsapi.mlb.com",
  timeout: 5000,
});
