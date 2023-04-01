import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <iframe
        width="1000px"
        height="600px"
        src={"/test_iframe/index.html"}
      ></iframe>
    </div>
  );
};

export default Home;
