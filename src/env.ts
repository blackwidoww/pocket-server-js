import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env) 

/* parse: tenta verificar se o (process.env) segue o seguinte formato: 
    const envSchema = z.object({
    DATABASE_URL: z.string().url(),
})
 ... ou seja, ele verifica se dentro de (process.env) possui a propriedade DATABASE_URL que é uma string() e uma url()
*/
