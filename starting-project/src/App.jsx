import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalVisibility() {
    setModalIsVisible(false);
  }

  function showModalVisisbility() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalVisisbility} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalVisibility}
        />
      </main>
    </>
  );
}

export default App;
