import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5hCwdYRfy7f7wYbuOBdNCkcicsgeKkyZOdxkPZVbtVU'
  }
});
