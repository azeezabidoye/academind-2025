import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }
  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        {/* <Post author="Wizkid" body="Ojuelegba...them know my story" />  */}
      </ul>
    </>
  );
}

export default PostsList;
