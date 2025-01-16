import React,{useContext} from 'react'
import './Navbar.css'
import { AuthContext } from '../../store/FirebaseContext'
import {signOut,getAuth} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import app from '../../Firebase/config'
function Navbar() {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const auth = getAuth(app)
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <img className='Avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    <div className="buttons">
     <span className='span1' >{user ? `Welcome ${user.displayName}`:'Login'}</span>
     {user && <span className='span1' onClick={ async ()=> {
         await signOut(auth)
         navigate('/Login')
     }} >Logout</span>}
    </div>
    </div>
  )
}

export default Navbar
