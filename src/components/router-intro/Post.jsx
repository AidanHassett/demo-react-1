import {useParams} from 'react-router-dom';

const Post = () => {

  const {postTxt} = useParams();

  return (
    <h2>
      Post: {postTxt}
    </h2>
  )

}

export default Post;
