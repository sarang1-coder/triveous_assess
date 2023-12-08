import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://google-news-api1.p.rapidapi.com/search',
  params: { language: 'EN' },
  headers: {
    'X-RapidAPI-Key': '3d14d4999bmsh57d6b86c6fa9797p109968jsn5796d7f96ef9',
    'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
  }
};

export const fetchAllData = async () => {
  try {
    const response = await axios.request(options);
    console.log('news',response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
