import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {

    const [cardItem, setCardItem] = useState([]);

    return (
        <>
            <ProductContext.Provider value={{cardItem, setCardItem}}>
                {props.children}
            </ProductContext.Provider>
        </>
    );
};

export default ProductProvider;