const apiKey = '110b5040a91f486bbb99a6ecc982a7e4'

export const fetchAllData = async () => {
  try {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + apiKey
    )
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error('Failed to fetch top headlines')
  }
}


