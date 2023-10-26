import axios from 'axios';


export const api = (kindOfImage) => {

  return axios.get(
    `https://pixabay.com/api/?q=${kindOfImage}&key=${'34989150-f6282d23d45a19c7980767166'}&image_type=photo&orientation=horizontal&per_page=3&page=1}`
  );
};
