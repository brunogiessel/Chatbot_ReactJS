import React from 'react'
import './header.css'
import { history } from '../../components/history'

function logout () {
    history.push('/')
    localStorage.removeItem('appToken')
}

const Header = props => {
    return (
        <div className='chat-header'>
                <h2 className="chat-title">Chatbot React</h2>
                <button className="chat-logout" onClick={logout}>
                        Sair
                </button>
        </div>
    )
}

export default Header