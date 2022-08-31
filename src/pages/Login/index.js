import React, { useContext, useEffect, useState } from 'react'
import "../Login/login.css"
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../utilities/authContext';

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { currentUser, setCurrentUser, setAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser != null) {
      navigate('/');
    }
  }, [])

  function submit(e) {
    e.preventDefault();
    const user = {
      email: email,
      isAdmin: false,
    }
    setCurrentUser(user);

    localStorage.setItem('Email', JSON.stringify(user));

    if (email === 'a@gmail.com' && pass === '111111') {
      setAdmin(true);
      toast('Welcome Boss 😎 ', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/")
      }, 2000);

    } else if (pass.length < 6 || pass.length === null) {
      toast.error('Check your email or password!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setAdmin(false);
      toast.success('Succesfully loged!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/")
      }, 2000)
    }
  }

  return (
    <>
      <section id='login'>
        <div className="login">
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
          <form className='loginForm'>
            <h1 className='animate__animated animate__zoomInDown'>Login</h1>
            <label htmlFor="loginEmail animate__animated animate__bounce" className='animate__animated animate__lightSpeedInRight'>Email</label>
            <input
              type="email"
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
              id='loginEmail'
              placeholder='@ is required!'
              className='loginEmail'
              required />
            <label htmlFor="loginPass" className='animate__animated animate__lightSpeedInRight'>Password</label>
            <input
              type="password"
              onChange={(e) => { setPass(e.target.value) }}
              id='loginPass'
              value={pass}
              placeholder='At least 6 characters!'
              className='loginPass'
              required />
            <button onClick={submit} className='subBtn'>Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login