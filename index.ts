import express, {Request, Response} from "express"
 
import dotenv from "dotenv"
import { API_KEY , PORT } from "./src/const/config"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from 'swagger-ui-express'
import { swaggerOptions } from "./swaggerOptions"
import { TriviaController } from "./src/controllers/triviaController"
import { QuoteController } from "./src/controllers/quoteController"
import { FactController } from "./src/controllers/FactController"
dotenv.config()
 
 
const app = express()
 

const triviaController = new TriviaController(API_KEY)
const quoteController = new QuoteController(API_KEY)
const factController = new FactController(API_KEY)
 
app.get("/",  (req: Request, res: Response) => {
  res.header({"content-type":"text/HTML"})
  res.send("<h1>Knowledge API</h1><p>API en express.js pour recuperer des faits, citations et question/réponse aléatoire</p>")
})
app.get("/trivia/get/:category?", async (req: Request, res: Response) => {
  await triviaController.getTrivia(req, res)
})
app.get("/quotes/get/:category?", async (req: Request, res: Response) => {
  await quoteController.getQuote(req, res)
})
app.get("/fact/get/:limit?", async (req: Request, res: Response) => {
  await factController.getFact(req, res)
})

const specs = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
 
app.listen(PORT, () => {
  console.log(`Le server est en cours d'execution sur le port ${PORT}`)
})
