import HeadBar from "./HeadBar"
import FootBar from "./FootBar"
import LoginPage from "./LoginPage"
import {useState} from "react"

const LoginManager = () => {
  const passwords = new Map();
  passwords.set("Aidan", "pass1");
  passwords.set("Barry", "pass2");

  const [username, setUsername] = useState("");


  const login = (usernameIn, passwordIn) => {
    if (passwords.get(usernameIn) === passwordIn) {
      setUsername(usernameIn);
    } else {
      setUsername("");
    }
  }

  return (
    <>
      <HeadBar username={username}/>
      <LoginPage login={login} />
      <FootBar/>
    </>
  );
};

export default LoginManager;
