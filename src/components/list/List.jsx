import Chatlist from './chat-list/Chatlist'
import './list.css'
import Userinfo from './user-info/Userinfo'

const List = () => {
  return (
    <div className='list'>
      <Userinfo />
      <Chatlist />
      </div>
  )
}

export default List