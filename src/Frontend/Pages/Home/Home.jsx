import Navbar from "../../Components/Navbar/Navbar";
import HelmetTitle from "../../Components/HelmetTitle/HelmetTitle";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <HelmetTitle title="Home" />
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
