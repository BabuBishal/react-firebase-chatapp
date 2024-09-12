import "./adduser.css";

const AddUser = () => {
  return (
    <div className="adduser">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="user-detail">
            <img src="./avatar.png" alt="" />
            <span>Jane Doe</span>
        </div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default AddUser;
