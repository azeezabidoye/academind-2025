import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Wizkid" body="Ojuelegba...them know my story" />
      </ul>
    </>
  );
}

export default PostsList;
