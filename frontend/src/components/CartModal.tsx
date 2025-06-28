import './CartModal.css'

interface CartItem {
    id:string;
    name:string;
    price:number;
    originalPrice?:number;
    imageUrl:string;
    quantity:number;
}

interface CartHoverModalProps {
    items:CartItem[];
    totalValue:number;
    onEmptyCart:()=> void;
    onViewCart:()=> void;
}

export const CartModal:React.FC <CartHoverModalProps> = ({items, totalValue, onEmptyCart, onViewCart})=> {
     return (
        <div className='cart-hover-modal'>
            <h3>Meu Carrinho</h3>
            {items.length === 0 ?
            (<p className='empty-cart-message'>Seu carrinho está vazio.</p>) : (
                <div>
                    <div className='cart-hover-items'>
                        {items.map(item => (
                            <div key = {item.id} className='cart-hover-item'>
                                <img src={item.imageUrl} alt={item.name} className='cart-hover-item-image' />
                                <div className='cart-hover-item-details'>
                                    <p className='cart-hover-item-name'>{item.name}</p>
                                    <div className='cart-hover-item-prices'>
                                        {item.originalPrice && item.originalPrice > item.price && (
                                            <span className='original-price-strike-through'>R$ {item.originalPrice.toFixed(2)} 
                                            </span>
                                        )}
                                            <span className='current-price'>R$ {item.price.toFixed(2)} 
                                            </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cart-hover-total'>
                        <span>Valor Total: </span>
                        <span className='total-amount'>{totalValue.toFixed(2)} </span>
                    </div>
                    <div className='cart-hover-actions'>
                        <button onClick={onEmptyCart} className='empty-cart-button'>Esvaziar</button>
                        <button onClick={onViewCart} className='view-cart-button'>Ver carrinho</button>
                    </div>
                </div>
            )}
        </div>
    )
}