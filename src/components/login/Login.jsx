import { useState } from "react";
import "./login.css";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <di className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form action="">
          <input type="text" placeholder="Email" name="email" />
          <input type="password]" placeholder="Password" name="password" />
          <button className="login">Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an account</h2>
        <form action="">
          <label htmlFor="file">
          <img src={avatar.url || "./avatar.png"} alt="" />
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          Upload a profile image.</label>
          
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password]" placeholder="Password" name="password" />
          <button className="signup">Sign Up</button>
        </form>
      </div>
    </di>
  );
};

export default Login;
