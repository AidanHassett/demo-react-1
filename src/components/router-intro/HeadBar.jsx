import {Link} from "react-router-dom";

const HeadBar = () => {

  return (
    <header>
      <span>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
      </span>
    </header>
  );
};

export default HeadBar;
