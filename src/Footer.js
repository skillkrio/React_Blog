import { useStoreState } from "easy-peasy";
const Footer = () => {
  const postCount = useStoreState((state) => state.postCount);
  const today = new Date();
  return (
    <footer className="Footer">
      {!postCount ? (
        <p>Copyright &copy; {today.getFullYear()} </p>
      ) : (
        <p>{postCount} BlogPost</p>
      )}
    </footer>
  );
};

export default Footer;
