import {Router, Request, Response} from 'express'
import { pixDS } from '../data-source'
import {Usuario} from '../entities/usuario.entity'

const usuarioRoutes = new Router()
const usuarioRepo = pixDS.getRepository(Usuario)

usuarioRoutes.post("/",
    async (req:Request, resp:Response) => {
        const dadosUsuario = req.body

        let usuario = new Usuario()

        usuario.cpf_cnpj = dadosUsuario.cpf_cnpj
        usuario.nome = dadosUsuario.nome
        usuario.telefone = dadosUsuario.telefone
        usuario.rua = dadosUsuario.rua
        usuario.bairro = dadosUsuario.bairro
        usuario.cidade= dadosUsuario.cidade
        usuario.numero_conta= dadosUsuario.numero_conta  
        
        usuario =  await usuarioRepo.save(usuario)
         

        resp.statusCode=201;
        resp.statusMessage="Usuário criado"
        resp.json({
            "usuarioId":usuario.id
        })

    }
)

usuarioRoutes.delete("/:id",
    async (req:Request, resp:Response) =>{   
        const usuario = await usuarioRepo.delete({
            id:req.params.id
        })
        
        resp.statusCode=200;
        resp.statusMessage="Requisição recebida"
        resp.json(
             usuario
        )
    }
 )


usuarioRoutes.get("/:id",
    async (req:Request, resp:Response) =>{   
        const usuario = await usuarioRepo.findOneBy({
            id:req.params.id
        })
        
        resp.statusCode=200;
        resp.statusMessage="Requisição recebida"
        resp.json(
             usuario
        )
    }
 )

export default usuarioRoutes;