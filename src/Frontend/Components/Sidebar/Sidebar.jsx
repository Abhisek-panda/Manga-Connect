import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdExplore } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { getAllUsers } from "../../Services/DataServices";
const Sidebar = () => {
  console.log(import.meta.env.VITE_REACT_APP_JWT_SECRET);
  // console.log(process.env.REACT_APP_JWT_SECRET);
  return (
    <div className="h-90vh flex  justify-between flex-col">
      <div className="flex flex-col gap-4 mt-5">
        <Link className="no-underline text-black font-semibold text-lg flex items-center gap-1 ">
          <HiHome />
          Home
        </Link>
        <Link className="no-underline text-black font-semibold text-lg flex items-center gap-1">
          <MdExplore />
          Explore
        </Link>
        <Link className="no-underline text-black font-semibold text-lg flex items-center gap-1">
          <BsBookmarkFill />
          BookMarks
        </Link>
        <Link className="no-underline text-black font-semibold text-lg flex items-center gap-1">
          <FaHeart />
          Liked Posts
        </Link>
      </div>

      <div className="flex items-center">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
            alt="profile"
            className="h-10"
            onClick={getAllUsers}
          />
        </div>
        <div>
          <p>Abhisek Panda</p>
          <p>@abhisek-panda</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
