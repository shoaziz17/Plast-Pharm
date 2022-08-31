import React, { useContext } from 'react'
import Card from '../Catalogue/catalogue_components/card';
import Layout from '../../shared_components/Layout'
import { ProductContext } from '../../utilities/productContext';
import "./buyed.css";
function Buyed() {

    const { cardItem } = useContext(ProductContext);
    // const buyedItems = cardItem.map((item) => {
    //     return (
    //         <section id='buyed'>
    //             <div className="buyed">
    //                 <div className="buyedCard">
    //                     <img src={item.img} alt="img" />
    //                     <h1>Lid {item.id}</h1>
    //                 </div>
    //             </div>
    //         </section>
    //     )
    // })

    const buyedItems = cardItem.map((item) => <Card card={item} />)

    return (
        <>
            <Layout>
                <section id='buyed'>
                    <div className="buyed">
                        <div className='buyedRow'>
                            {buyedItems}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Buyed