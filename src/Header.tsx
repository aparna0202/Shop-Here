import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Categories from "./Categories";
import { useState } from "react";

const Header = () => {
  const [openCategories, setOpenCategories] = useState(false);
  return (
    <div className="h-[60px] w-full shadow-xl backdrop-blur-md bg-[rgba(255,255,255,0.5)] flex items-center justify-around px-10 fixed">
      <span className="text-3xl font-bold">Logo</span>
      <div className="flex gap-9 text-xl font-bold">
        <Link to="/">
          <span className="hover:text-red-500 hover:transition-all ease-in-out hover:cursor-pointer">
            Home
          </span>
        </Link>
        <Link to="/products">
          <span className="hover:text-red-500 hover:transition-all ease-in-out hover:cursor-pointer">
            Products
          </span>
        </Link>
        <span
          className="hover:text-red-500 hover:transition-all ease-in-out hover:cursor-pointer relative"
          onClick={() =>
            openCategories ? setOpenCategories(false) : setOpenCategories(true)
          }
        >
          Categories
        </span>
        {openCategories ? (
          <div className="absolute top-[42px] right-[500px] ">
            <div
              className="w-0 h-0 ml-[200px]
            border-l-[10px] border-l-transparent
            border-b-[20px] border-b-white-500
            border-r-[10px] border-r-transparent"
            ></div>
            <Categories
              openCategories={openCategories}
              setOpenCategories={setOpenCategories}
            />
          </div>
        ) : (
          ""
        )}
        <Link to="/contact">
          <span className="hover:text-red-500 hover:transition-all ease-in-out hover:cursor-pointer">
            Contact
          </span>
        </Link>
        <Link to="/search">
          <span className="h-[100%] flex items-center hover:text-red-500 hover:transition-all ease-in-out hover:cursor-pointer">
            <FaSearch />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
