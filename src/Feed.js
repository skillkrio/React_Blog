import Post from "./Post";
import DataContext from "./context/DataContext";
import { useContext } from "react";
const Feed = () => {
  console.log("Feed");
  const { searchResults } = useContext(DataContext);
  return (
    <>
      {searchResults.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
