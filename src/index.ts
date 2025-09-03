import express, { Request, Response } from 'express';
import { pixDS } from './data-source';
import 'reflect-metadata';
import usuarioRoutes from './routes/usuario.routes';

const app = express()
app.use(express.json())
app.use("/usuario", usuarioRoutes)

const main = async () => {
    try {
        await pixDS.initialize();
        console.log(process.env);

    } catch (error) {
        console.log(error);
    }
    app.listen(4000, () => {
        console.log("Estou ouvindo...")
    })

}
main()







