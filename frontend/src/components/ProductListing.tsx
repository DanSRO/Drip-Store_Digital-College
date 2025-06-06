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
