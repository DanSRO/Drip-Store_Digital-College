import { Link } from "react-router-dom"
interface ProductCardProps{
    image:string;
    name:string;
    price:number;
    priceDiscount:number;
}
export const ProductCard = ({image, name, price, priceDiscount}:ProductCardProps) =>{
    return(
        <section style={{
            width:'292px',
            border:'1px solid #e0e0e0',
            borderRadius:'8px',
            overflow:'hidden',
            backgroundColor:'#fff',
            textAlign:'center',
            paddingBottom:'10px'
        }}>            
            <Link to={'/detalhes-do-produto'}>
                <img src={image} alt={name} style={{display:'block', maxWidth:'80%', height:'321px', margin: '0 auto', transform:'rotate(-30deg)', objectFit:'contain'}}/>
            </Link>
            <div style={{padding:'10px'}}>
                <h5 style={{margin:'5px 0'}}>{name}</h5>
                <div>
                    <span style={{textDecoration:'line-through', color:'darkgray', marginRight:'10px', fontSize:'24px'}}>${price}</span>
                    <span style={{color:'light-grey', fontWeight:'bold'}}>${priceDiscount}</span>
                </div>
            </div>            
        </section>
    );
}
