import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://google-news-api1.p.rapidapi.com/search',
  params: { language: 'EN' },
  headers: {
    'X-RapidAPI-Key': 'dcfaaba649msh1f8bf4054c3c80cp126d0fjsn1da11acf1aed',
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
