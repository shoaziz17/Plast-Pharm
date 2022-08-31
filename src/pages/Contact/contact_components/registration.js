import React, { useState } from "react";
import Iframe from "./iFrame";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registration() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function getInfo(e) {
    e.preventDefault();
    toast.success('Your details are sent  !', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  //return 

  return (
    <>
      <section id="register">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}

          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="main">
          <div className="form">
            <form>
              <h1>Contact us</h1>
              <p>
                Leave your contact details. Our specialists will contact you.
              </p>
              <input
                type="text"
                placeholder="Your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <input
                type="text"
                placeholder="Phone number"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                value={number}
              />
              <button onClick={getInfo}>Send</button>
            </form>
          </div>
          <Iframe />
        </div>
      </section>
    </>
  );
}

export default Registration;
