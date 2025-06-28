import './MyOrders.css'

interface Order{
    id:string;
    orderNumber:string;
    productName:string;
    productUrl:string;
    status:'Em trânsito' | 'Finalizado' | 'Cancelado';
}

interface MyOrderProps{
    orders?:Order[];
}

export const MyOrders:React.FC<MyOrderProps> = ({orders})=>{
    const defaultOrders:Order [] = [
        {   
            id:'1',
            orderNumber:'12',
            productName:'Tenis-Tênis Nike Revolution 6 Next Nature Masculino-1',
            productUrl:'/public/Layer 1aa.png',
            status:'Finalizado',
        },
        {   
            id:'2',
            orderNumber:'12',
            productName:'Tenis-Tênis Nike Revolution 6 Next Nature Masculino-1',
            productUrl:'/public/Layer 1aa.png',
            status:'Em trânsito',
        },
        {   
            id:'3',
            orderNumber:'12',
            productName:'Tenis-Tênis Nike Revolution 6 Next Nature Masculino-1',
            productUrl:'/public/Layer 1aa.png',
            status:'Finalizado',
        },
        {   
            id:'4',
            orderNumber:'12',
            productName:'Tenis-Tênis Nike Revolution 6 Next Nature Masculino-1',
            productUrl:'/public/Layer 1aa.png',
            status:'Em trânsito',
        },
        {   
            id:'5',
            orderNumber:'12',
            productName:'Tenis-Tênis Nike Revolution 6 Next Nature Masculino-1',
            productUrl:'/public/Layer 1aa.png',
            status:'Cancelado',
        },
    ]

    const currentOrders = orders || defaultOrders;

    return (
        <div className='my-orders-page-container'>
            {/*Menu Lateral*/}
            <nav className='my-orders-sidebar'>
                <ul>
                    <li> <a href="#" className='sidebar-item'>Meu perfil</a> </li>
                    <li > <a href="/meu-carrinho" className='sidebar-item'>Meus pedidos</a></li>
                    <li > <a href="/minhas-infos" className='sidebar-item'>Minhas informações</a></li>
                    <li > <a href="#" className='sidebar-item'>Métodos de pagamento</a></li>
                </ul>
            </nav>
            {/*Conteúdo principal*/}
            <main className='my-orders-content'>
                <div className='my-orders-header'>
                    <h2>Meus pedidos</h2>
                    <h2 className='status-header'>STATUS</h2>
                </div>
                <div className='orders-list'>
                    {currentOrders.map(order=>(
                    <div key={order.id} className='order-item'>
                        <div className='order-details'>
                            <p className='order-number'>Pedido N° {order.orderNumber}</p>
                            <div className='product-info-wrapper'>
                                <img src={order.productUrl} alt={order.productName} className='order-product-image'/>
                                <p className='order-product-name'>{order.productName}</p>
                            </div>
                        </div>
                        <div className={`order-status ${order.status.replace(/\s/g,'-').toLowerCase()}`}>
                        </div>
                    </div>
                    ))}
                </div>
            </main>
        </div>
    )
}