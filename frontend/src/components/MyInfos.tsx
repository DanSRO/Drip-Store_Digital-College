import { useState } from 'react';
import './MyInfos.css'

interface UserInfo {
    id:string;
    name:string;
    CPF:string;
    email:string;
    phone:string;
}

interface DeliveryInfo {
    id:string;
    address:string;
    neighborhood:string;
    city:string;
    CEP:string;
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
            CPF: '11122233344',
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
            CEP:'433-8800',
        }
    ]

    const userCurrent = userInfo || user;
    const deliveryCurrent = deliveryInfo || delivery;

    const [isEditing, setIsEdtiting] = useState(false);
    const [formData, setFormData] = useState(userCurrent[0]);

    const [deliveryFormData, setDeliveryFormData] = useState(deliveryCurrent[0]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleChangeDelivery = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setDeliveryFormData({...deliveryFormData, [e.target.name]: e.target.value});
    }

    const handleSave = () => {
        //essa função no momento apenas fecha a edição
        setIsEdtiting(false);
    };


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
                    <button onClick={()=>setIsEdtiting(!isEditing)}>{isEditing ? 'Cancelar' : 'Editar'}</button>
                {isEditing && <button onClick={handleSave}>Salvar</button>}
                </div>
                <hr />

                <div className="infos-list">
                    {userCurrent.map((usuario:any) =>(
                        <div key={usuario.id}>
                            {isEditing ? (
                                <div>                                
                                    <h2>Informações Pessoais</h2>
                                    <div className="infos-list-div">
                                        <input name="name" value={formData.name} onChange={handleChange}/>
                                        <input name="CPF" value={formData.CPF} onChange={handleChange}/>
                                        <input name="email" value={formData.email} onChange={handleChange}/>
                                        <input name="phone" value={formData.phone} onChange={handleChange}/>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p>Nome: {usuario.name}</p>
                                    <p>CPF: {usuario.CPF}</p>
                                    <p>Email: {usuario.email}</p>
                                    <p>Celular: {usuario.phone}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <hr />
                <div className="infos-list">
                    {deliveryCurrent.map((delivery:any) =>(
                        <div key={delivery.id}>
                            {isEditing ? (
                                <div>
                                    <h2>Informações de Entrega</h2>
                                    <div className="infos-list-div">
                                        <input name="address" value={deliveryFormData.address} onChange={handleChangeDelivery}/>
                                        <input name="neighborhood" value={deliveryFormData.neighborhood} onChange={handleChangeDelivery}/>
                                        <input name="city" value={deliveryFormData.city} onChange={handleChangeDelivery}/>
                                        <input name="CEP" value={deliveryFormData.CEP} onChange={handleChangeDelivery}/>
                                    </div>
                                </div>
                            ) : (
                                <div>                                    
                                    <p>Endereço: {delivery.address}</p>
                                    <p>Bairro: {delivery.neighborhood}</p>
                                    <p>Cidade: {delivery.city}</p>
                                    <p>CEP: {delivery.CEP}</p>
                                    
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}