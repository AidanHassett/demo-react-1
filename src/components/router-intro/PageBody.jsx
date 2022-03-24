import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HeadBar from "./HeadBar";
import FootBar from "./FootBar";
import Home from "./Home";
import About from "./About";
import PostMaker from "./PostMaker";
import Post from "./Post";

const PageBody = () => {
  return (
    <>
      <Router>
        <HeadBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/" element={<About/>}/>
          <Route path="/post/" element={<PostMaker/>}/>
          <Route path="/post/:postTxt" element={<Post/>}/>
        </Routes>
        <FootBar/>
      </Router>
    </>
  );
};

export default PageBody;
