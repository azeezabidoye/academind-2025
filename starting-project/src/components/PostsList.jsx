import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Currency" body="Werey la fi n wo werey" />
      <Post author="Wizkid" body="Ojuelegba...them know my story" />
    </ul>
  );
}

export default PostsList;
