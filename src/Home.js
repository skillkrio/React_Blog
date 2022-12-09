import Feed from "./Feed";
import { useStore, useStoreState } from "easy-peasy";

const Home = ({ fetchError, isLoading }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
