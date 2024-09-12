import { useState } from 'react'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
import './index.css'
import Login from './components/login/Login'
import Notification from './components/notification/Notification'

const App = () => {
const [isUser, setIsUser] = useState(false)

  return (
    <div className='container'>
      {isUser ? (
        <>
        <List />
      <Chat />
      <Detail /></>
      ) : 
      <Login />
      }
      <Notification />
    </div>
  )
}

export default App