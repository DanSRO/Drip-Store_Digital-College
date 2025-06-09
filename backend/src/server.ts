import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import { user, UserInstance } from './models/user.js';
import { Product } from './models/Product.js';
import {sequelize} from './config/database.js';

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/users', async(req:any, res:any)=>{
    try{
        const users = await user.findAll();
        res.json(users);
    }catch(error){
        console.log("Erro ao buscar usuários.", error);
        res.status(500).json({error:"Erro ao buscar usuários."});
    }
});

app.get('/products', async(req:any, res:any)=>{
    try{
        const products = await Product.findAll();
        res.json(products);
    }catch(error){
        console.log("Erro ao buscar produtos.", error);
        res.status(500).json({error: "Erro ao buscar produtos."});
    }
});

app.post('/register', async(req:any, res:any)=>{
    const {name, email, password} = req.body;
    try{
        if(!name || !email || !password){
            return res.status(400).json({message:"Todos os campos são obrigatórios."});
        }
        const existingUser = await user.findOne({where:{email}});
        if(existingUser){
            return res.status(409).json({message: 'Email já cadastrado.'});
        }
        const newUser = await user.create({name, email, password});
        res.status(201).json({message:"Usuário registrado com sucesso.", id:newUser.id, name:newUser.name, email:newUser.email});
    }catch(error:any){
        console.error('Erro no registro: ', error);
        res.status(500).json({message:'Erro ao registrar usuário.', error: error.message});
    }
});
app.post('/login', async(req:any, res:any)=>{
    const {email, password} = req.body;
    try{
        if(!email || !password){
            return res.status(400).json({message:"Email e senha são obrigatórios."})
        }
        const foundUser = await user.findOne({where:{email}});
        if(!foundUser){
            return res.status(401).json({message:"Credenciais inválidas."});
        }
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if(!isMatch){
            return res.status(401).json({message:"Credenciais inválidas."});
        }
        const token = jwt.sign(
            { id:foundUser.isSoftDeleted, email:foundUser.email },
            process.env.JWT_SECRET || "secreto",
            {expiresIn: '1h'}
        );
        res.status(200).json({message: "Bem-vindo ao Drip-Store.", token, user:{id:foundUser.id, name:foundUser.name, email:foundUser.email}});        
    }catch(error:any){
        console.log("Error no login: ", error);
        res.status(500).json({message:"Erro ao fazer login.", error:error.message});
    }
});
app.get('/logout', async(req:any, res:any)=>{
    res.status(200).json("Adeus! Volte sempre.");
})

console.log('Iniciando sincronia do BD...');
sequelize.sync({force:false})
.then(async() => {
    console.log("BD sincronizado com sucess.");
    const productCount = await Product.count();
    if (productCount === 0) {
      console.log('Populando produtos de exemplo...');
      await Product.bulkCreate([
        { image: "/images/Layer 1aa.png", name: "K-Swiss V8 - Masculino", price: 200, priceDiscount: 100 },
        { image: "/images/Layer 1aa.png", name: "Nike Revolution 6 - Feminino", price: 250, priceDiscount: 150 },
        { image: "/images/Layer 1aa.png", name: "Adidas Ultraboost - Unissex", price: 300, priceDiscount: 200 },
        { image: "/images/Layer 1aa.png", name: "Puma RS-X - Infantil", price: 180, priceDiscount: 90 },
        { image: "/images/Layer 1aa.png", name: "New Balance 574 - Masculino", price: 220, priceDiscount: 120 },
        { image: "/images/Layer 1aa.png", name: "Reebok Classic - Feminino", price: 190, priceDiscount: 80 },
        { image: "/images/Layer 1aa.png", name: "Mizuno Wave - Unissex", price: 280, priceDiscount: 180 },
        { image: "/images/Layer 1aa.png", name: "Under Armour HOVR - Masculino", price: 270, priceDiscount: 160 },
        { image: "/images/Layer 1aa.png", name: "Asics Gel-Kayano - Feminino", price: 260, priceDiscount: 140 },
        { image: "/images/Layer 1aa.png", name: "Fila Disruptor - Unissex", price: 170, priceDiscount: 70 },
      ]);
      console.log('Produtos de exemplo adicionados.');
    }
    app.listen(5000, () => console.log('Servidor rodando na porta 5000.'));
})
.catch((err: any) => console.error('Erro ao sincronizar o banco:', err));