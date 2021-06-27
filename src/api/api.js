import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export async function buscar(url, setDados) {
  const response = await api.get(url);
  setDados(response.data);
}