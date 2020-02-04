import axios from 'axios'
import {history} from './history'



const handleSubmit = values => {
    axios.post('https://react-challenge-backend.mybluemix.net/api/auth', values)
    .then(resp => {
        const { data } = resp
        if (data) {
            localStorage.setItem('appToken', data.token)
            history.push('/app')
        } 
    })
}

export default handleSubmit