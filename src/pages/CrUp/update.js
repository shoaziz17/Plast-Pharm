import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../shared_components/Layout';
import "./crup.css";
import { ToastContainer, toast } from 'react-toastify';

function Update() {
    const navigate = useNavigate();
    const params = useParams();
    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        axios
            .get(`http://localhost:3000/lid/${params.id}`)
            .then(function (response) {
                setImgUrl(response.data.img);
                setDescription(response.data.description);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    function update() {
        axios
            .put(`http://localhost:3000/lid/${params.id}`, {
                img: imgUrl,
                description: description,
            })
            .then((response) => {
                toast.success(" Updated!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        navigate(`/detail/${params.id}`);
    }

    return (
        <Layout>
            <section id='create'>
                <div className="create">
                    <h1>Update product here!</h1>
                    <form>
                        <input
                            value={imgUrl}
                            type="text"
                            placeholder='Enter image url'
                            onChange={(e) => setImgUrl(e.target.value)}
                        />
                        <input
                            value={description}
                            type="text"
                            placeholder='Enter description'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button onClick={update}>Update</button>
                    </form>
                </div>
            </section>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Layout>
    )
}

export default Update