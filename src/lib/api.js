import axios from 'axios'

export function getAPOD (date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=gWle8oSHHa0RfEOKRgjhseTRkwfqc2JMleKyOlwJ&date=${date}`)
}
