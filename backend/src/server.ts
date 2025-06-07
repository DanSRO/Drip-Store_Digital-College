import express from 'express';
import cors from 'cors';

import { user } from './models/user.js';
import {sequelize} from './config/database.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', async(req:any, res:any)=>{
    const users = await user.findAll();
    res.json(users);
});

console.log('Iniciando sincronia do BD...');
sequelize.sync()
.then(() => {
    console.log("BD sincronizado com sucess.");
    app.listen(5000, () => console.log('Servidor rodando na porta 5000.'));
})
.catch((err: any) => console.error('Erro ao sincronizar o banco:', err));