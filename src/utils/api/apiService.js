import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://google-news-api1.p.rapidapi.com/search',
  params: { language: 'EN' },
  headers: {
    'X-RapidAPI-Key': '27d7df9e04msh7929fb7ed077defp156a1ajsnc8a36fb2fa78',
    'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com',
  },
}

export const fetchAllData = async () => {
  try {
    const response = await axios.request(options)
    console.log('news', response.data)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
