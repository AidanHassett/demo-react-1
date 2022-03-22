const HeadBar = ({username}) => {
  let loggedIn;
  if (username == "" || undefined) {
    loggedIn = "You aren't logged in";
  } else {
    loggedIn = "You are logged in as " + username;
  }

  return (
    <header>
      {loggedIn}
    </header>
  );
};

export default HeadBar;
