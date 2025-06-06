import express from 'express';
import cors from 'cors';
import User from './models/User';
import { sequilize } from './config/database';

const app = express();
app.use(cors());
app.use(express.json());

app.get('users', async(req, res)=>{
    const users = await User.findAll();
    res.json(users);
});

sequilize.sync().then(()=>{
    app.listen(5000), ()=> console.log('Servidor rodando na porta 5000.');
});