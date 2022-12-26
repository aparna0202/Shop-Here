import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Categories from "./Categories";
import { useState } from "react";

type Props = {
  setDisplaySearchResults: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
};

const Header = ({
  setDisplaySearchResults,
  setSearchInput,
  searchInput,
}: Props) => {
  const [openCategories, setOpenCategories] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const navigate = useNavigate();

  const search = (e: any) => {
    if (e.keyCode === 13) {
      setDisplaySearchResults(true);
      navigate(`/categories/${searchInput}`);
    }

    // const params = new URLSearchParams(searchInput);
  };

  return (
    <div className="h-[60px] w-full shadow-xl backdrop-blur-md bg-[rgba(255,255,255,0.5)] flex items-center justify-start md:justify-around px-10 fixed">
      <span className=" text-2xl font-heading md:text-3xl font-normal md:font-bold">
        Shop <span className="text-red-500">Here</span>
      </span>
      <div className="hidden md:flex md:gap-9 md:text-xl md:font-bold">
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
          <div className="absolute top-[42px]  md:right-[500px] ">
            <div
              className="w-0 h-0 ml-[200px]
            border-l-[10px] border-l-transparent
            border-b-[20px] border-b-white
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
          <span className="h-[100%] flex items-center hover:text-red-500 hover:transition-all ease-in-out hover:cursor-pointer">
            Contact
          </span>
        </Link>
        {searchClicked ? (
          <input
            type="text"
            placeholder="Enter the Category"
            className="border border-black text-sm font-thin px-4 py-1 focus: outline-none text-black"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => search(e)}
          />
        ) : (
          ""
        )}
        <Link to="/search">
          <span
            className="h-[100%] flex items-center hover:text-red-500 hover:transition-all ease-in-out hover:cursor-pointer"
            onClick={() =>
              searchClicked ? setSearchClicked(false) : setSearchClicked(true)
            }
          >
            <FaSearch />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
