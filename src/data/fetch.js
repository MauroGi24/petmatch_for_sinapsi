const API_KEY = process.env.REACT_APP_DOG_API_KEY

export const fetchDogData = async () => {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=10', {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Errore:', error);
    throw error;
  }
}