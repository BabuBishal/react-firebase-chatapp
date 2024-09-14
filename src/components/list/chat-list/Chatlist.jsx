import { useEffect, useState } from 'react'
import './chatlist.css'
import AddUser from './add-user/AddUser';
import { useUserStore } from '../../../lib/userStore';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../../lib/firebase';

const Chatlist = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser} = useUserStore();

  useEffect(() => {

const unsub = onSnapshot(doc(db, "userChats", currentUser.id), async (res) => {
try{
  const items = res.data()?.chats || [];

const promises = items.map(async (item) => {
  try{
    const userDocRef = doc(db, "users", item.recieverId);
  const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()){
      const user = userDocSnap.data();
  return {...item, user};
    } else{
      console.error("NO user document found for:", item.recieverId);
      return {...item, user:null}
    }
  
}catch(err) {
  console.log("Error fetching user:", err)
  return {...items, user:null}
}
});

const chatData = await Promise.all(promises);
setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt));

} catch(err) {
  console.error("Error processing snapshot:", err)
}
});

return () => {
  unsub();
}
  }, [currentUser.id]);

  return (
    <div className='chatlist'>
        <div className="search">
            <div className="searchbar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='Search' />
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add' onClick={() => setAddMode((prev) => !prev)}/>
        </div>
       {chats.map((chat) => (
         <div className="item">
         <img src='./avatar.png' alt="" />
         <div className="texts">
           <span>John Doe</span>
           <p>Hello. This is an example</p>
         </div>
       </div>
       ))}
       
        {addMode && <AddUser /> }
    </div>
  )
}

export default Chatlist