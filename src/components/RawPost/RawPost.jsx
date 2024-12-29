import React from 'react'
import {useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../constants/constants'

import './RawPost.css'
function RawPost(props) {
  const [movies,setMovies] = useState([]);
  useEffect(()=> {
       axios.get(props.url).then((response)=> {
          setMovies(response.data.results);
       })
  },[])
  const [urlId,setUrlId] = useState('')
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    }};

    const handleMovieClick = (id) => {
      console.log(id)
     axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=> {  
      if(response.data.results.length!==0) {
        setUrlId(response.data.results[0]);
      }
      else {
        alert('Array empty')
      }
     })
      
    }
    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=> 
           <img onClick={()=>handleMovieClick(obj.id)} className={props.isSmall ? 'smallPost':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            )
          }
        </div>
    { urlId &&  <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default RawPost
