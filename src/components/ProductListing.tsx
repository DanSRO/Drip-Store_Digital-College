import { ProductCard } from "./ProductCard";

export const ProductListing = () =>{

    const products = [
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
        {
        image:"/public/Layer 1aa.png",
        name:"K-Swiss V8 - Masculino",
        price:200,
        priceDiscount:100
        },
    ]
    return(
        <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(292px, 1fr))',
            gap:'20px',
            justifyItems:'center',
            padding:'20px'
            }}>
            {products.map((product, index)=>(
                <ProductCard
                    key={index}
                    // image={product.image}
                    // name={product.name}
                    // price={product.price}
                    // priceDiscount={product.priceDiscount}
                    {...product}
                />
            ))}
        </div>
    );
}

/* component antes de mudar
export const ProductListing = () =>{
    return(
        <div style={{textAlign:'center'}}>                
            <h4>Coleções em destaque</h4>
            <div style={{display:'flex', gap:'5px'}}>
                <img src="/public/collection-1.png" alt="Camisas" />
                <img src="/public/collection-2.png" alt="Tênis" />                
                <img src="/public/collection-3.png" alt="Acessórios" />
            </div>
        </div>
    );
}
*/