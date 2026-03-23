import axios from 'axios';

const API_KEY = 'AIzaSyDPKm855u2IjD7OAt3v7gKR599dO08Vapo';

async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  return response.data;
}
