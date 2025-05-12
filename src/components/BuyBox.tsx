export const BuyBox = () =>{
    return(
        <>
            <div>
                <table>
                    <thead>
                        <th>Meu carrinho</th>
                        <th>Quantidade</th>
                        <th>Unitário</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img                                
                                    src="/public/White-Sneakers-PNG-Clipart 1.png" 
                                    alt="produto selecionado" />
                                imagem
                                <p>Descrição do produto</p>
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
                <label htmlFor="">Subtotal</label>
                <label htmlFor="">Frete</label>
                <label htmlFor="">Desconto</label>
                <label htmlFor="">Total</label>
                <button>Continuar</button>
            </div>
        </>
    )
}
