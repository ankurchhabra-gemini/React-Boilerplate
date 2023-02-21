/* eslint-disable import/prefer-default-export */
import axios from '../../utility/Axios/AxiosInstance';
import API_URLS from '../../config/API_URLS';
import { USER } from '../../protocols/UserData';

const getUserData = async () => {
  try {
    const response: USER.USER_RESPONSE = await axios.get(API_URLS.todo);
    return response.data;
  } catch ({ response }) {
    throw new Error('error found');
  }
};

export default getUserData;
