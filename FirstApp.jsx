// app.js

import axios from 'axios';

// Kullanıcı bilgilerini ve postları birleştiren asenkron fonksiyon
const getData = async (userId) => {
  try {
    // Kullanıcı bilgilerini çekmek için istek yap
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;

    // Kullanıcının postlarını çekmek için istek yap
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = postResponse.data;

    // Kullanıcı ve post verilerini birleştir
    const combinedData = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      website: userData.website,
      company: userData.company,
      posts: userPosts,
    };

    return combinedData;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    throw error;
  }
};

export default getData;
