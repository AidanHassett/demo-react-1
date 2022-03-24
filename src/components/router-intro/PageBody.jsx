import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HeadBar from "./HeadBar";
import FootBar from "./FootBar";
import Home from "./Home";
import About from "./About";

const PageBody = () => {
  return (
    <>
      <Router>
        <HeadBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <FootBar/>
      </Router>
    </>
  );
};

export default PageBody;
