import {Link} from "react-router-dom";

const PostMaker = () => {

  let postTxt = "";

  return (
    <form>
      <input type="text" name="postTxt" id="postTxt" onChange={(event) => postTxt = event.target.value}/>
      <Link to={postTxt}> Post </Link>
    </form>
  )
}

export default PostMaker;
