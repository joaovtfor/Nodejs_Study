import {Pool} from 'pg';

const pool = new Pool({
  user: 'postgres',
  database: 'pix_db',
  password: 'masterkey',
  port: 5432,
  max: 5, 
  idleTimeoutMillis: 30000, 
});

export default pool;