import { DataSource } from 'typeorm';
import { Usuario } from './entities/usuario.entity'
import dotenv from 'dotenv';

dotenv.config();

export const pixDS = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || ''),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Usuario],
    subscribers: [],
    migrations: [],
});