import { Response, Request } from "express"
import axios, { AxiosResponse } from "axios"
import { FACT_API_URL } from "../const/config"
import { FactData } from "../interface/FactData"

/**
 * @swagger
 * /trivia/get/{limit}:
 *   get:
 *     summary: Recupere des faits aléatoire
 *     description: Recupere des faits aléatoire depuis une autre api, possibilité de choisir la limite de fait entre 1 et 30
 *     parameters:
 *        - in : path
 *          name : limit
 *          require : false
 *          description : nombre de faits aléatoire souhaité, doit entre 1 et 30
 *          schema:
 *              type: integer
 *     responses:
 *         200:
 *              description: listes de 1 fait
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              Faits:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          fait:
 *                                              type: string
 *                                              example: The Hundred Years War lasted for 116 years
*/
export class FactController{
    private API_KEY:string
    constructor(API_Key:string){
        this.API_KEY=API_Key
    }
    public async getFact(req: Request, res: Response): Promise<void>{
        const limit = req.params.limit
        try{
            const response:AxiosResponse = await axios.get(FACT_API_URL+`${limit ? '?limit='+limit:''}`,{headers: { "X-Api-Key" : this.API_KEY }})
            const FactData:FactData = {
                Faits:response.data
            }
            res.json(FactData)
        }catch(err){
            if (err) res.status(500).json("error")
        }
    }
}