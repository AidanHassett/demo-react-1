import {Link} from "react-router-dom";

const FootBar = () => {
  return (
    <footer>
      <span>
        <Link to="/about"> About </Link>
      </span>
    </footer>
  );
};

export default FootBar;
