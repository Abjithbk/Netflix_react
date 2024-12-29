import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RawPost from './components/RawPost/RawPost';
import { action, comedyMovies, documentary, horrorMovies, orginals, romanticMovies } from './url'

function App() {
  return (
    <div>
   <Navbar />
   <Banner />
   <RawPost url = {orginals} title='Netflix orginals' />
   <RawPost url = {action} isSmall title="Action" />
   <RawPost url = {comedyMovies} isSmall title="Comedy Movies" />
   <RawPost url = {horrorMovies} isSmall title="Horror Movies" />
   <RawPost url = {romanticMovies} isSmall title="Romantic movies" />
   <RawPost url = {documentary} isSmall title="Documentaries" />
    </div>
 
  );
}

export default App;
