import { Response, Request } from "express"
import axios, { AxiosResponse } from "axios"
import { QUOTE_API_URL } from "../const/config"
import { QuoteData } from "../interface/QuoteData"
/**
 * @swagger
 * /quote/get/{category}:
 *   get:
 *     summary: Recupere une citation aléatoire
 *     description: Recupere une citation aléatoire, possibilité de choisir une catégorie
 *     parameters:
 *        - in : path
 *          name : category
 *          require : false
 *          description : categorie de la citation
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
 *                              Auteur:
 *                                  type: string
 *                                  example: Seann William Scott
 *                              Citation:
 *                                  type: string
 *                                  example: Working on the 'Ice Age' movies, I'm really proud to be in them.
 *                              Catégorie:
 *                                  type: string
 *                                  example: movies
*/
export class QuoteController{
    private API_KEY:string
    constructor(API_Key:string){
        this.API_KEY=API_Key
    }
    public async getQuote(req: Request, res: Response): Promise<void>{
        const category = req.params.category
        try{
            const response:AxiosResponse = await axios.get(QUOTE_API_URL+`${category ? '?category='+category:''}`,{headers: { "X-Api-Key" : this.API_KEY }})
            const QuoteData:QuoteData = {
                Auteur:response.data[0].author,
                Citation:response.data[0].quote,
                Catégorie:response.data[0].category
            }
            res.json(QuoteData)
        }catch(err){
            if (err) res.status(500).json("error")
        }
    }
}