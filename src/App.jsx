import { useEffect, useState } from 'react'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
import './index.css'
import Login from './components/login/Login'
import Notification from './components/notification/Notification'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './lib/firebase'

const App = () => {
const [isUser, setIsUser] = useState(false);

useEffect(() => {
  const unSub = onAuthStateChanged(auth, (user) => {
    console.log(user);
  })

  return () => {
    unSub();
  }
}, [])

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