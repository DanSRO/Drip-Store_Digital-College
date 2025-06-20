import { user, UserInstance } from "../models/user.js"

export const getAllUsers = async (req:any, res:any) =>{
    try{        
        const users = await user.findAll();
        if(!users){
            return res.status(404).json({error:'Usuários não encontrado.'});
        }
        return res.status(200).json(users);
    }catch(error){
        return res.status(500).json({error:'Erro ao buscar usuários.'});
    }
}

export const getUserById = async(req:any, res:any) =>{
    const {id} = req.params;
    try{
        const client = await user.findByPk(id);
        if(!client){
            return res.status(404).json({error:'Usuário nã encontrado.'});
        }
        return res.status(200).json(client);        
    }catch(error){
        return res.status(500).json({error:'Erro ao buscar usuário.'})
    }
}

export const createUser = async(req:any, res:any) =>{
    const { name, email, password, CPF, fone, endereco, cidade, CEP, bairro, complemento } = req.body;
    if(!name || !email || !password || !CPF || !fone || !endereco || !cidade || !CEP || !bairro || !complemento){
        return res.status(400).json({error:'Todos os campos são obrigatórios.'})
    }
    try{        
        const newUser: UserInstance = await user.create({name, email, password, CPF, fone, endereco, cidade, CEP, bairro, complemento});
            return res.status(201).json({
                id:newUser.id,
                name:newUser.name,
                email:newUser.email,
                password:newUser.password,
                CPF:newUser.CPF,
                fone:newUser.fone,
                endereco:newUser.endereco,
                cidade:newUser.cidade,
                CEP:newUser.CEP,
                bairro:newUser.bairro,
                complemento:newUser.complemento
            });
    }catch(error:any){
        console.error('Erro ao criar usuário: ', error);
        return res.status(500).json({error:'Erro interno do servidor ao criar novo usuário.', details:error.message});
    }
}

export const updateUser = async (req:any, res:any) =>{
    const {id} = req.params;
    const dados = req.body;
    try{        
        const usuario:UserInstance | null = await user.findByPk(id);
        if(!dados){
            return res.status(404).json({erro:'Usuário não encontrado.'});
        }
        if(!dados || Object.keys(dados).length === 0){
            return res.status(400).json({error:'Nenhum dado fornecido para atualizar usuário.'});
        }
        const usuarioAtualizado = await usuario?.update(dados);
        return res.status(200).json({
            message:'Usuário atualizado com sucess.',
            usuario: usuarioAtualizado,

        })
    }catch(error:any){
        console.error('Erro ao buscar usuário: ', error)
        return res.status(500).json({error:'Erro do servidor ao buscar usuário.', details:error.message});
    }
}

export const deleteUser = async (req:any, res:any) =>{
    const {id} = req.params;
    try{
        const usuario = await user.findByPk(id);
        if(!usuario){
            return res.status(404).json({error: 'Usuário não encontrado.'});
        }
        await usuario.destroy();
        return res.status(204).send();
    }catch(error){
        return res.status(500).json({error:'Erro ao excluir usuário.'});
    }
}