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
      <input type="text" name="username" id="username" onChange={(event) => tempUser = event.target.value}/>
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" onChange={(event) => tempPass = event.target.value}/>
      <br/>
      <button type="button" onClick={loginCaller}>Log In</button>
    </form>
  )
}

export default LoginPage;
