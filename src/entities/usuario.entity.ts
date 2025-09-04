import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Chave } from "./chave.entity";

@Entity(
    {
        name: "usuarios"
    }
)
export class Usuario {
    @PrimaryGeneratedColumn()
    id:number  

    @Column({
        nullable:false,
        unique:true
    })
    cpf_cnpj:string

    @Column({
        nullable:false
    })
    nome:string
    
    @Column()
    telefone:string

    @Column()
    rua:string

    @Column()
    bairro:string

    @Column()
    cidade:string
    
    @Column({
        nullable:false
    })
    numero_conta:string 

    @ManyToOne(() => Chave, (chave) => chave.user)
        chave: Chave
}