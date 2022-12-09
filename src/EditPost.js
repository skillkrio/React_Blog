import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import format from "date-fns/format";
import { useStoreState, useStoreActions } from "easy-peasy";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editTitle = useStoreState((state) => state.editTitle);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const editBody = useStoreState((state) => state.editBody);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const editPost = useStoreActions((actions) => actions.editPost); //calling thunk
  const getPostById = useStoreState((state) => state.getPostById);

  const post = getPostById(id);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    editPost(updatedPost);
    navigate("/");
  };

  useEffect(() => {
    //if post exist this could be existed. There could be times that page requested but post not exist.
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, []);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form
            className="newPostForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit(id);
            }}
          >
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Page Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
