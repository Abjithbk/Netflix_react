import React, { useEffect,useState,useContext } from 'react'
import {FirebaseContext} from '../../store/FirebaseContext'
import './Login.css';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
function Login() {
  useEffect(()=> {
     document.body.classList.add('Login-page');
     return () => {
      document.body.classList.remove('Login-page')
     }
  },[])
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [error,setError] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const auth = getAuth(firebase);
      const result = await signInWithEmailAndPassword(auth,email,pass)
      console.log("user logged in"+result.user);
      
       navigate('/');
    }
    catch (err) {
     setError("Invalid email and password.please try again..")
    }
   
  }
  return (
    <div>
      <img className='logo2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
      <div className="container">
      <h1>Login</h1>
      {
       error && (
        <p className='error-message' > {error} </p>
       )
      }
             <form onSubmit={handleLogin} >
             <input value={email} onChange={(e)=> setEmail(e.target.value)} className='Email' name='Email' type="email" placeholder='Enter your Email'/>
              <br />
              <input value={pass} onChange={(e) => setPass(e.target.value)} className="password" name='password' type="password" placeholder='Enter your Password' />
              <button className='buttonLogin' >Login</button>
             </form>
             <div className='checkbox2'>
              <input type="checkbox"/>
              <label htmlFor="">Remember me</label>
              <span onClick={()=> {
                navigate('/signup')
              }} >Sign up now</span>
             </div>
      </div>
    </div>
  )
}

export default Login
