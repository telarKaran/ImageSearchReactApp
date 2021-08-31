import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID iZaiAjjKXXNaisVnKqRiY9UiHdTzDjVXoX5lcJ2b2cs'
  }
});
