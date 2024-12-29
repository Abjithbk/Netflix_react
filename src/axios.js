import {BaseUrl} from './components/constants/constants';
import axios from 'axios'
const instance = axios.create({
    baseURL: BaseUrl,
  });
  
  export default instance