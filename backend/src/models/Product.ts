import { CreationOptional, DataTypes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

interface ProductAttributes{
    id:CreationOptional<number>;
    image:string;
    name:string;
    price:number;
    priceDiscount:number | null;
    createAt?:CreationOptional<Date>;
    updateAt?:CreationOptional<Date>;
}

type ProductCreationAttributes = Omit<ProductAttributes, 'id' & {id?: CreationOptional<number>}>;
export interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes{

}

export const Product = sequelize.define<ProductInstance>("Product",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    priceDiscount:{
        type:DataTypes.FLOAT,
        allowNull:true,
    }
    },
    {
        tableName:'products'
    }
);