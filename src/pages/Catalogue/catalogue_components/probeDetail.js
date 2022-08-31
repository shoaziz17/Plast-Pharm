import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../../../shared_components/Layout'
import { ToastContainer, toast } from 'react-toastify';

function LidDetail() {
    let params = useParams()

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/probes/${params.id}`)
            .then(function (response) {
                setDetail(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    function deleteItem(id) {
        axios
            .delete(`http://localhost:3000/probes/${id}`).then(() =>
                toast.error("Deleted!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            );
    }

    return (
        <>
            <Layout>
                <section id='detail'>
                    <div className="detail">
                        {
                            (detail != null && (
                                <div className="detailCard">
                                    <div className='detailTop'>
                                        <img src={detail.img} alt="img" />
                                        <p>{detail.description}</p>
                                    </div>
                                    <div className='detailBtn'>
                                        <Link to={'/update'}>
                                            <button className='update'>Update</button>
                                        </Link>
                                        <button onClick={deleteItem} className='delete'>Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Layout>
        </>
    )
}

export default LidDetail