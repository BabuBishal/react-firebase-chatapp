import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";

const Detail = () => {

  const { currentUser } = useUserStore();

  return (
    <div className="detail">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

          <div className="option">
            <div className="title">
              <span>Privacy & help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="./avatar.png" alt="" />
                  <span>Photo name</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="./avatar.png" alt="" />
                  <span>Photo name</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>

      </div>
         <div className="buttons">
         <button>Block User</button>
         <button className="logout" onClick={() => auth.signOut()}>Log Out</button>
         </div>
    </div>
  );
};

export default Detail;
