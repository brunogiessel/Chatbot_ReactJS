import axios from 'axios'


const botResponse = (userInput) => {

  const data_bot = {
    "input":
    {"text": userInput},
     "context": {}
  }
 let token = localStorage.getItem('appToken')


  let config = {
    headers: {
      Authorization : token
    }
  }

  axios.post('https://react-challenge-backend.mybluemix.net/api/message',
  data_bot, config)       
      .then(response => {
        const { data } = response
          if (data) {
              localStorage.setItem('msg_bot', data.message);
          }
      })
  }

  export default botResponse
