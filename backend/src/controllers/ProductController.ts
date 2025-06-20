import { Product, ProductInstance } from "../models/Product.js";

export const getAllProducts = async (req:any, res:any) =>{
    try{
        const products = await Product.findAll();
        if(!products){
            return res.status(404).json({error:'Produtos não encontrados.'});
        }
        res.status(200).json(products);
    }catch(error){
        return res.status(500).json({error:'Erro ao buscar produtos.'});
    }
}

export const getProductById = async(req:any, res:any)=>{
    const {id} = req.params;
    try{        
        const product = await Product.findByPk(id);
        if(!product){
            return res.status(404).json({error:'Produto não encontrado.'});
        }
        res.status(200).json(product);
    }catch(error){
        return res.status(500).json({error:'Erro ao buscar produto.'});
    }
}

export const createProduct = async (req:any, res:any) =>{
    const { image, name, price, priceDiscount } = req.body;
    if(!image || !name || !price){
        return res.status(400).json({error:'Campos: imagem, nome e preço são obrigatórios.'});
    }
    try{        
        const newProduct:ProductInstance = await Product.create({image, name, price, priceDiscount:priceDiscount || null});
        return res.status(201).json({
            id:newProduct.id,
            image:newProduct.image,
            name:newProduct.name,
            price:newProduct.price,
            priceDiscount:newProduct.priceDiscount,
            createAt:newProduct.createAt,
            updateAt:newProduct.updateAt,
        });
    }catch(error:any){
        console.error('Erro ao criar produto: ', error);
        return res.status(500).json({error:'Erro interno do servidor ao criar novo produto.', details:error.message})
    }
}

export const updateProduct = async (req:any, res:any ) => {
    const {id} = req.params;
    const dados = req.body;

    try{
        const product = await Product.findByPk(id);
        if(!product){
            return res.status(404).json({error:'Produto não encontrado.'});
        }
        await product.update(dados);
    }catch(error:any){
        return res.status(500).json({error:'Erro ao atualizar produto.'});
    }
}

export const deleteProduct = async(req:any, res:any) =>{
    const {id} = req.params;
    try{
        const product = await Product.findByPk(id);
        if(!product){
            return res.status(404).json({error:'Produto não encontrado.'});
        }
        await product?.destroy();
        return res.status(204).send();
    }catch(error){
        return res.status(500).json({error:'Erro ao excluir produto.'});
    }
}