import dotenv from "dotenv"
dotenv.config()

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000
export const API_KEY = process.env.API_KEY || ""
export const FACT_API_URL = "https://api.api-ninjas.com/v1/facts"
export const QUOTE_API_URL = "https://api.api-ninjas.com/v1/quotes"
export const TRIVIA_API_URL = "https://api.api-ninjas.com/v1/trivia"