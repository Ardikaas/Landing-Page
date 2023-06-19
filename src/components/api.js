import axios from "axios"

const baseUrl = 'http://localhost:4000/'

export const getTesti = async() => {
  const testi = await axios.get(`${baseUrl}`)
  console.log({ testimonial: testi })
}