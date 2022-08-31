import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Layout from '../../shared_components/Layout';
import './crup.css';

function CreatePage() {

    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    function add() {
        axios
            .post("http://localhost:3000/lid", {
                img: imgUrl,
                description: description,
            })
            .then((response) => {
                toast.success(" Created!", {
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
        navigate(`/lids`);
    }

    return (
        <Layout>
            <section id='create'>
                <div className="create">
                    <h1>Create new product here!</h1>
                    <form>
                        <input
                            onChange={(e) => setImgUrl(e.target.value)}
                            value={imgUrl} type="text"
                            placeholder='Enter image url'
                        />
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            value={description} type="text"
                            placeholder='Enter description'
                        />
                        <button onClick={add}>Create</button>
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

export default CreatePage