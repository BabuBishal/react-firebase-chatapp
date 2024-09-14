import { useState } from "react";
import { db } from "../../../../lib/firebase";
import "./adduser.css";
import { collection, getDocs, query, where } from "firebase/firestore";

const AddUser = () => {
  const [user, setUser] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username')

    try{
// Create a reference to the cities collection
const userRef = collection(db, "users");

// Create a query against the collection.
const q = query(userRef, where("username", "==", username));

const querySnapShot = await getDocs(q);

if(!querySnapShot.empty) {
  setUser(querySnapShot.docs[0].data())
}
    } catch(err) {
      console.error("Error:", err)
    }
  }
  return (
    <div className="adduser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
     {user && <div className="user">
        <div className="user-detail">
            <img src={user.avatar || "./avatar.png" }alt="" />
            <span>{user.username}</span>
        </div>
        <button>Add</button>
      </div>}
    </div>
  );
};

export default AddUser;
