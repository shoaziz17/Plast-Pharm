import React, { useEffect, useState } from 'react'
import axios from "axios";
function Certificate() {
    const [certificate, getCertificate] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3000/certificate')
            .then(function (response) {
                getCertificate(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    const certificates = certificate.map((img) => {
        return (
            <>
                <img src={img.img} alt="img" />
            </>
        )
    })

    return (
        <>
            <section id='certificate'>
                <h1>Certificates</h1>
                <div className="certificate">
                    {certificates}
                </div>
            </section>
        </>
    )
}

export default Certificate