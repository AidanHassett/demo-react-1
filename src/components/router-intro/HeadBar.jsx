import {Link} from "react-router-dom";

const HeadBar = () => {

  return (
    <header>
      <span>
        <Link to="/"> Home </Link>
        ||
        <Link to="/post"> Make a Post </Link>
      </span>
    </header>
  );
};

export default HeadBar;
