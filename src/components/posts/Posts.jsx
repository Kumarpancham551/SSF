import { makeRequest } from "../../axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from '@tanstack/react-query'

const Posts = ({userId}) => {
  
  var myData = localStorage.getItem('user');
console.log(JSON.parse(myData))

  return <div className="posts">
           <Post post={JSON.parse(myData)}  />
        
  </div>;
};

export default Posts;