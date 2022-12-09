import Post from "./Post";
import { useStoreState } from "easy-peasy";
const Feed = () => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <>
      {searchResults.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
