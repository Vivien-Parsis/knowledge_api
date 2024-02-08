import { Response, Request } from "express"
import axios, { AxiosResponse } from "axios"
import { TRIVIA_API_URL } from "../const/config"
import { TriviaData } from "../interface/triviaData"
/**
 * @swagger
 * /trivia/get/{category}:
 *   get:
 *     summary: Recupere une question/réponse aléatoire
 *     description: Recupere une question/réponse aléatoire, possibilité de choisir une catégorie
 *     parameters:
 *        - in : path
 *          name : category
 *          require : false
 *          description : categorie de la question/réponse
 *          schema:
 *              type: integer
 *     responses:
 *         200:
 *              description: 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              Question:
 *                                  type: string
 *                                  example: In which continent would you find the Yellow river ?
 *                              Reponse:
 *                                  type: string
 *                                  example: Asia
 *                              Catégorie:
 *                                  type: string
 *                                  example: geography
*/
export class TriviaController{
    private API_KEY:string
    constructor(API_Key:string){
        this.API_KEY=API_Key
    }
    public async getTrivia(req: Request, res: Response): Promise<void>{
        const category = req.params.category
        try{
            const response:AxiosResponse = await axios.get(TRIVIA_API_URL+`${category ? '?category='+category:''}`,{headers: { "X-Api-Key" : this.API_KEY }})
            const TriviaData:TriviaData = {
                Question:response.data[0].question,
                Reponse:response.data[0].answer,
                Catégorie:response.data[0].category
            }
            res.json(TriviaData)
        }catch(err){
            if (err) res.status(500).json("error")
        }
    }
}