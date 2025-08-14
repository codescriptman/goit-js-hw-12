import axios from 'axios';

const apiKey = '51663153-45016a947364047e6aa27bf79';

export const getImagesByQuery = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: apiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data.hits;
};
