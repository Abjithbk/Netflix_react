import React, {useEffect, useState,useContext} from 'react'
import './Signup.css'
import { FirebaseContext } from '../../store/FirebaseContext';
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {setDoc,doc, getFirestore} from 'firebase/firestore'
import app from '../../Firebase/config';
import { useNavigate } from 'react-router-dom'
function Signup() {
  useEffect(() => {
    document.body.classList.add('signup-page');
    return () => {
      document.body.classList.remove('signup-page');
    };
  }, []);
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [phno,setPhno] = useState('');
  const [pass,setPass] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      const auth = getAuth(firebase)
      const result = await createUserWithEmailAndPassword(auth,email,pass);
     await updateProfile(result.user,{
        displayName:userName
      })

      await setDoc(doc(getFirestore(app),'users',result.user.uid),{
        id: result.user.uid,
        displayName:userName,
        phno:phno,
      })

      navigate('/Login');
      
  }
  return (
    <div>
      <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
       <div className="container">
        <h1>Sign up</h1>
             <form onSubmit={handleSubmit} >
              <input value={userName} onChange={(e)=> setUserName(e.target.value)} className='input' name='name' type="text" placeholder='Enter your name'/>
              <br />
              <input value={email} onChange={(e)=> setEmail(e.target.value)} className="email" name='email' type="email" placeholder='Enter your Email' />
              <br />
              <input value={phno} onChange={(e)=> setPhno(e.target.value)} type="phone" name='phone' className='phone' placeholder='Enter phone no' />
              <br />
              <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" name="password" placeholder='Enter your password'/>
              <br />
              <button className='buttonSignUp' >Sign up</button>
             </form>
             <div className='checkbox1'>
              <input type="checkbox"/>
              <label htmlFor="">Remember me</label>
            <span onClick={()=> {
              navigate('/Login')
            }} >Sign in now</span>
             </div>
       </div>
    </div>
  )
}

export default Signup
