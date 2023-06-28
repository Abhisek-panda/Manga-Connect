import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const customStyles = {
    content: {
      height: "20vh",
      width: "50vh",
    },
  };
  return (
    <div className="bg-blue-500 h-8 sticky top-0">
      {isSearch ? (
        <div>
          <Modal
            isOpen={() => setIsSearch(true)}
            onRequestClose={() => setIsSearch(false)}
            style={customStyles}
          >
            <h1>Modal</h1>
            <input type="search" className="border-solid border-black border" />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <NavLink to="/" className="no-underline text-black text-2xl ">
            Manga Connect
          </NavLink>
          <MdOutlineSearch
            className="text-2xl"
            onClick={() => setIsSearch(true)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
