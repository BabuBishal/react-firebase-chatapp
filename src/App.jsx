import { useState } from 'react'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
import './index.css'
import Login from './components/login/Login'

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
    </div>
  )
}

export default App