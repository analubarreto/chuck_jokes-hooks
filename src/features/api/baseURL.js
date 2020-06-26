import axios from 'axios'

export const jokeRequest = axios.create({
  baseURL: 'https://api.chucknorris.is'
})