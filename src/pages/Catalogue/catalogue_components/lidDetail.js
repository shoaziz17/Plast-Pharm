import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../../../shared_components/Layout'
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../../utilities/authContext';

function LidDetail() {
    let params = useParams()
    let navigate = useNavigate()
    const { admin } = useContext(AuthContext);

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/lid/${params.id}`)
            .then(function (response) {
                setDetail(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    function deleteItem() {
        axios
            .delete(`http://localhost:3000/lid/${params.id}`)
            .then(() =>
                toast.error("Deleted!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }),
            );
        navigate(`/lids`)
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
                                        {admin ? <Link to={`/update/${params.id}`}>
                                            <button className='update'>Update</button>
                                        </Link> : null}
                                        {admin ? <button onClick={deleteItem} className='delete'>Delete</button> : null}
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