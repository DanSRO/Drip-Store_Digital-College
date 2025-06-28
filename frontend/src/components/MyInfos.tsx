import './MyInfos.css'

interface UserInfo {
    id:string;
    name:string;
    cpf:string;
    email:string;
    phone:string;
}

interface DeliveryInfo {
    id:string;
    address:string;
    neighborhood:string;
    city:string;
    cep:string;
}

interface AllIncluded {
    userInfo?:UserInfo[];
    deliveryInfo?:DeliveryInfo[];
}

export const MyInfos:React.FC<AllIncluded> = ({userInfo, deliveryInfo}) => {
    const user:UserInfo [] = [
        {
            id:'1',
            name: 'francisco antonio pereira',
            cpf: '11122233344',
            email: 'francisco@gmail.com',
            phone: '(85)988888888',
        }
    ]

    const delivery:DeliveryInfo [] = [
        {
            id:'1',
            address: 'rua joao pessoa, 333',
            neighborhood: 'centro',
            city: 'fortaleza',
            cep:'433-8800',
        }
    ]

    const userCurrent = userInfo || user;
    const deliveryCurrent = deliveryInfo || delivery;

    return (
        <div className="my-infos-page-container">
            {/*Menu Lateral*/}
            <nav className="my-infos-sidebar">
                <ul>
                    <li className="sidebar-item"><a href="#">Meu Perfil</a></li>
                    <li className="sidebar-item"><a href="/meu-carrinho">Meus Pedidos</a></li>
                    <li className="sidebar-item"><a href="/minhas-infos">Minhas informações</a></li>
                    <li className="sidebar-item"><a href="#">Métodos de pagamento</a></li>
                </ul>
            </nav>
            <main className="my-delivery-content">
                <div className="my-delivery-header">
                    <h2>Minhas informações</h2>
                    <button>Editar</button>
                </div>
                <hr />

                <div className="infos-list">
                    {userCurrent.map((usuario:any)=>(
                        <div key={usuario.id}>
                            <div>
                                <h2>Informações pessoais</h2>
                                <p>Nome: {usuario.name} </p>
                                <p>CPF: {usuario.cpf} </p>
                                <p>E-mail: {usuario.email} </p>
                                <p>Celular: {usuario.phone} </p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="infos-list">
                    {deliveryCurrent.map((delivery:any)=>(
                        <div key={delivery.id}>
                            <div>
                                <h2>Informações de entrega</h2>
                                <p>Endereço: {delivery.address} </p>
                                <p>Bairro: {delivery.neighborhood}</p>
                                <p>Cidade: {delivery.city}</p>
                                <p>CEP: {delivery.cep}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}