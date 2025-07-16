import { Request,Response } from "express"

export const authPage = async (req: Request, res: Response) => {
    return res.send("Olá Mundo");
}