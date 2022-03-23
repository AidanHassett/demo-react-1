import {useState} from "react"

const LoginPage = ({login}) => {

  let tempUser = "";
  let tempPass = "";

  const loginCaller = () => {
    login(tempUser, tempPass);
  }

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" name="usernameBox" id="usernameBox" onChange={(event) => tempUser = event.target.value}/>
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="password" name="passwordBox" id="passwordBox" onChange={(event) => tempPass = event.target.value}/>
      <br/>
      <button type="button" onClick={loginCaller}>Log In</button>
    </form>
  )
}

export default LoginPage;
