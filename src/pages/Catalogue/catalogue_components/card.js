import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "../../../utilities/productContext";
function Card({ card }) {
    const navigate = useNavigate();
    const { cardItem, setCardItem } = useContext(ProductContext);

    function toDetailPage(productId) {
        navigate(`/detail/${productId}`)
    }

    function addCard(e) {
        e.preventDefault();
        let newArr = [...cardItem];
        newArr.push(card);
        setCardItem(newArr);
    }


    return (
        <>
            {
                <div className="lid-card1">
                    <img src={card.img} alt="img" />
                    <h1>Lid {card.id}</h1>
                    <button onClick={() => toDetailPage(card.id)} className="readBtn">Read More</button>
                    <button onClick={addCard} className='buy'>Buy</button>
                </div>
            }
        </>
    )
}

export default Card