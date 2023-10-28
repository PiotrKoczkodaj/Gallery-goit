import axios from 'axios';


export const api = (kindOfImage,pageNumber,quantity) => {
console.log(kindOfImage,pageNumber,quantity)
  return axios.get(
    `https://pixabay.com/api/?q=${kindOfImage}&key=${'34989150-f6282d23d45a19c7980767166'}&image_type=photo&orientation=horizontal&per_page=${quantity}&page=${pageNumber}}`
  )
};
