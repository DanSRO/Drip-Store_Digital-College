import { useState } from "react";
import "./BuyBox.css"

interface BuyBoxProps{
    cartProducts?:ProductInCart[];
    relatedProducts?:RelatedProduct[];
}

interface ProductInCart{
    id:number;
    name:string;
    color:string;
    size:number;
    price:number;
    quantity:number;
    imageUrl:string;
}

interface RelatedProduct{
    id:number;
    name:string;
    originalPrice:number;
    discountPrice:number;
    imageUrl:string;
    discount:string;
}

export const BuyBox = ({cartProducts = [], relatedProducts = []}:BuyBoxProps) =>{
    const defaultCartProducts:ProductInCart[]=[
        {
            id:1,
            name:'Tênis Nike Revolution 6 Next Nature Masculino',
            color:'vermelho/branco',
            size:43,
            price:319.00,
            quantity:1,
            imageUrl:'/public/White-Sneakers-PNG-Clipart 1.png', 
        }
    ]

    const defaultRelatedProducts:RelatedProduct[]=[
        {
            id: 101,
            name: "Tênis K-Swiss VB - Masculino",
            originalPrice: 200.00,
            discountPrice: 100.00,
            imageUrl: "/public/Layer 1aa.png", 
            discount: "30% OFF"
        },
        {
            id: 102,
            name: "Tênis K-Swiss VB - Masculino",
            originalPrice: 200.00,
            discountPrice: 100.00,
            imageUrl: "/public/Layer 1aa.png",
            discount: "30% OFF"
        },
        {
            id: 103,
            name: "Tênis K-Swiss VB - Masculino",
            originalPrice: 200.00,
            discountPrice: 100.00,
            imageUrl: "/public/Layer 1aa.png",
            discount: "30% OFF"
        },
        {
            id: 104,
            name: "Tênis K-Swiss VB - Masculino",
            originalPrice: 200.00,
            discountPrice: 100.00,
            imageUrl: "/public/Layer 1aa.png",
            discount: "30% OFF"
        },
    ]

    const products=cartProducts.length > 0 ? cartProducts : defaultCartProducts;

    const related=relatedProducts.length > 0 ? relatedProducts : defaultRelatedProducts;

    const [couponCode, setCouponCode] = useState('');

    const [cep, setCep] = useState('');

    const subtotal = products.reduce((acc,product)=>acc+(product.price * product.quantity),0);

    const frete = 0.00;

    const discount = 30.00;

    const total = subtotal - discount + frete;

    return(
        <div className="buybox-container">
            <div className="cart-section">
                <h2>Meu carrinho</h2>
                <table className="cart-table">
                    <thead>
                        <tr>                            
                            <th></th>
                            <th>Quantidade</th>
                            <th>Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product=>(
                        <tr key={product.id}>
                            <td className="product-details-cell">                                
                                <img src={product.imageUrl} alt={product.name} />
                                <div className="product-info">
                                    <p className="product-name">{product.name}</p>
                                    <p className="product-color">Cor: {product.color}</p>
                                    <p className="product-size">Tamanho: {product.size}</p>
                                    <button className="remove-item-button">Remover item</button>
                                </div>
                            </td>
                            <td className="quantity-control">
                                <button>-</button>
                                <span>{product.quantity}</span>
                                <button>+</button>
                            </td>
                            <td className="price">
                                R$ {product.price.toFixed(2)}
                            </td>
                            <td className="total-price">                                
                                R$ {(product.price * product.quantity).toFixed(2)}
                            </td>
                        </tr>
                        ))}                        
                    </tbody>
                </table>
                <div className="coupon-freight-section">
                    <div className="input-group">
                        <label htmlFor="coupon">Cupom de desconto</label>                        
                        <div className="input-with-button">
                            <input 
                                type="text" 
                                id="coupon" 
                                placeholder="Insira seu código" 
                                value={couponCode}
                                onChange={(evento)=>setCouponCode(evento.target.value)}
                            />
                            <button className="ok-button">Ok</button>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="cep">Calcular Frete</label>
                        <div className="input-with-button">
                            <input 
                                type="text" 
                                id="cep" 
                                placeholder="Insira seu CEP" 
                                value={cep}
                                onChange={(evento)=>setCep(evento.target.value)}
                            />
                            <button className="ok-button">Ok</button>
                        </div>
                    </div>
                </div>
                {/*Sessão de produtos relatados*/}
                <div className="related-products-section">
                    <h3>Produtos relacionados <a href="#" className="view-all-link">Ver todos ➡</a></h3>
                    <div className="related-products-grid">
                        {related.map(product=>(
                            <div key={product.id} className="related-product-cart">
                                <span className="discount-badge">
                                    {product.discount}
                                </span>
                                <img src={product.imageUrl} alt={product.name} className="related-product-image" />
                                <p className="related-product-name">Tênis</p>
                                <p className="related-product-model">{product.name}</p>
                                <div className="related-product-prices">
                                    <span className="original-price">{product.originalPrice.toFixed(2)}</span>
                                    <span className="discounted-price">{product.discountPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*Resumo da sessão direita*/}
            <div className="summary-section">
                <h3>Resumo</h3>
                <div className="summary-item">
                    <span>Subtotal: </span>
                    <span>R$: {subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <span>Frete: </span>
                    <span>R$: {frete.toFixed(2)}</span>
                </div>
                <div className="summary-item discount-row">
                    <span>Desconto: </span>
                    <span>R$: {discount.toFixed(2)}</span>
                </div>
                <div className="summary-total">
                    <span>Total: </span>
                    <span>R$: {total.toFixed(2)}</span>
                </div>
                <p className="installments">Ou 10x de R$ {(total/10).toFixed(2)} sem juros</p>
                <button className="continue-button">Continuar</button>
            </div>
        </div>
    )
}
