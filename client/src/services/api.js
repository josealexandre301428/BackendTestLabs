import axios from 'axios';
const token = "S2dT8J8nAvvOR1x6GoBFRBYp"

const api = axios.create({
  baseURL: "lexart-test-dun.vercel.app/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,

  },
});

export default api;