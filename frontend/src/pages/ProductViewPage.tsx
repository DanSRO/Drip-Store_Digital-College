import { BuyBox } from "../components/BuyBox"
import { ProductOptions } from "../components/ProductOptions"

export const ProductViewPage = () =>{
    return(
        <BuyBox
        name="Tênis Esportivo"
        reference={123456}
        price={299.9}
        rating={32}
        priceDiscount={219.9}
        description="Tênis ideal para corridas e caminhadas, com design moderno e confortável"
        >
            <ProductOptions/>
        </BuyBox>
    )
}
