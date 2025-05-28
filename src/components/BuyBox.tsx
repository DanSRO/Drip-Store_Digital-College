interface BuyBoxProps{
    name?:string;
    reference:number;
    rating:number;
    price?:number;
    priceDiscount?:number;
    description?:string;
    children?:React.ReactNode;
}

export const BuyBox = ({name, reference, rating, price = 759.90, priceDiscount=10.00, children}:BuyBoxProps) =>{
    const subtotal = price - (price/priceDiscount);
    const frete = 50.00;
    const total = subtotal + 50.00;
    return(
        <>
            <div>
                <table>
                    <thead>
                        <tr>                            
                            <th>Meu carrinho</th>
                            <th>Quantidade</th>
                            <th>Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                imagem
                                <img style={{width:'200px', height:'200px'}}                               
                                    src="/public/White-Sneakers-PNG-Clipart 1.png" 
                                    alt="produto selecionado" />
                                <p>Descrição do produto</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum quaerat optio voluptates consequuntur libero alias perspiciatis sapiente? Ad itaque exercitationem rem iusto possimus laboriosam praesentium officia reiciendis atque asperiores esse mollitia minima quis consequuntur consequatur iure ipsum corporis nam quibusdam labore tempore ut, tenetur, quasi at! Minima, obcaecati accusamus.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select name="" id="">
                                    <option value="" id="">-</option>
                                    <option value="" id="">+</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>R$ 000,00</td>
                        </tr>
                        <tr>
                            <td>R$ 000,00</td>
                        </tr>
                    </tbody>
                </table>
                <label htmlFor="">Cupom de desconto</label>
                <input type="text" placeholder="Insira seu código"/>
                <button>Ok</button>
                <label htmlFor="">Calcular o frete</label>
                <input type="text" placeholder="Insira seu CEP"/>
                <button>Ok</button>
            </div>
            <div>
                <h3>Resumo</h3>
                <label htmlFor="">Preço R$ {price.toFixed(2)}</label><br />
                <label htmlFor="">Desconto R$ {priceDiscount.toFixed(2)}</label><br />
                <label htmlFor="">Subtotal R$ {subtotal.toFixed(2)}</label><br />
                <label htmlFor="">Frete {frete.toFixed(2)}</label><br />
                <label htmlFor="">Total R$ {total.toFixed(2)}</label><br />
                <button className="button-primary">Continuar</button>
            </div>
            {children}
        </>
    )
}
