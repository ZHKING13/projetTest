import { axiosInstance } from '../../config';
import { loginFailure, loginStart, loginSuccess } from './userActions';
import axios from "axios";


export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('/login', user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};


// par manque de temps l'implementation de cette fonction n'a pas été faite car le back-end m'a pris du temps 