import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
interface Product {
    id:number;
    image:string;
    name:string;
    price:number;
    priceDiscount:number;
}

export const ProductListing = () =>{
    const[products, setProducts] = useState<Product[]>([]);
    const[loading, setLoading] = useState<boolean>(true);
    const[error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchProducts = async () =>{
            try{
                const response = await fetch('http://localhost:5000/products');
                const data = await response.json();
                setProducts(data);
                //usando axios
                // const response = await axios.get('http://localhost:5000/products');                
                // setProducts(response.data);
            }catch(err){
                console.error("Erro ao buscar produtos: ", err);
                setError("Não foi possível carregar os produtos. Tente novamente.")
            }finally{
                setLoading(false);            
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Carregando produtos...</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>{error}</div>;
    }

    if (products.length === 0) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Nenhum produto encontrado.</div>;
    }

    //como estou agora consumindo do back o objeto não é mais necessário
    // const products = [
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    //     {
    //     image:"/public/Layer 1aa.png",
    //     name:"K-Swiss V8 - Masculino",
    //     price:200,
    //     priceDiscount:100
    //     },
    // ]
    return(
        <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(292px, 1fr))',
            gap:'20px',
            justifyItems:'center',
            padding:'20px'
            }}>
            {products.map((product:Product)=>(
                <ProductCard
                    key={product.id}
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
