import axios from "axios";

const instance = axios.create({
  baseURL: 'https://my-smpt-nodejs-server.herokuapp.com/',
})

export const portfolioApi = {
  sendMessage(values) {
    return instance.post('sendMessage', {
      name: values.name,
      email: values.email,
      message: values.message,
    })
  }
}