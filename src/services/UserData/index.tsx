import axios from 'axios';
import { USER } from '../../protocols/UserData';

export const getUserData = async () => {
  try {
    const response: USER.USER_RESPONSE = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    return response.data;
  } catch ({ response }) {
    throw new Error('error found');
  }
};
