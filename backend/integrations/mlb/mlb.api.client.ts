import axios from "axios";

export const mlbApiClient = axios.create({
  baseURL: "https://statsapi.mlb.com/api/v1",
  timeout: 5000,
});
