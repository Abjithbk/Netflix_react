import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RawPost from './components/RawPost/RawPost';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import { action, comedyMovies, documentary, horrorMovies, orginals, romanticMovies } from './url';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {useContext,useEffect} from 'react'
import {AuthContext} from './store/FirebaseContext'
import app from './Firebase/config'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
function App() {
const {user,setUser} = useContext(AuthContext)
const auth = getAuth(app)
useEffect(()=> {
     const unsub = onAuthStateChanged(auth,(user) => {
      setUser(user)
     })
    return () => unsub();
     
},[auth,setUser])
  return (
    <div>
      <Router>
        <Routes>
      <Route path='/' element={
        <>
    <Navbar />
    <Banner />
    <RawPost url = {orginals} title='Netflix orginals' />
    <RawPost url = {action} isSmall title="Action" />
    <RawPost url = {comedyMovies} isSmall title="Comedy Movies" />
    <RawPost url = {horrorMovies} isSmall title="Horror Movies" />
    <RawPost url = {romanticMovies} isSmall title="Romantic movies" />
    <RawPost url = {documentary} isSmall title="Documentaries" />
        </>
      }/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>  
    </div>
 
  );
}

export default App;
