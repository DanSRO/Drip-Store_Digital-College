import { CreationOptional, DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import {sequelize} from "../config/database.js";
import bcrypt from 'bcryptjs';

export interface UserAttributes{
  id: CreationOptional<number>;
  name:string;
  email:string;
  password:string;
  CPF:string; 
  fone:string;
  endereco:string;
  cidade:string;
  CEP:string;
  bairro:string;
  complemento:string;
}
// type UserCreationAttributes = InferCreationAttributes<UserAttributes, { omit: 'id' }>;
type UserCreationAttributes = Omit<UserAttributes, 'id' & {id?:CreationOptional<number>;}>;

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
  // comparePassword(candidatePassword: string): Promise<boolean>;
}

export const user = sequelize.define<UserInstance>("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
      isEmail:true,
    },
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  CPF:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  fone:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  endereco:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  cidade:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  CEP:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  bairro:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  complemento:{
    type:DataTypes.STRING,
    allowNull:false,
  }
},{
  tableName:'users',
  hooks:{
    beforeCreate: async (user:UserInstance) => {
      // Faz o hash da senha antes de criar o usuário no banco
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      // Faz o hash da senha antes de atualizar o usuário (se a senha mudou)
      if (user.changed('password') && user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
  } 
}
);