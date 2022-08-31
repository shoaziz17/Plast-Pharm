import React from 'react'
import { Link } from 'react-router-dom';
import errImg from "../../images/svg/404.jpg";
import "../Styles/error.css"
function Error() {
    return (
        <>
            <section id='error'>
                <div className="error">
                    <div>
                        <h1>Russian language on the way of building...</h1>
                        <img src={errImg} alt="img" />
                        <Link to={'/'}>
                            <button className='backHome'>Back to home</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error