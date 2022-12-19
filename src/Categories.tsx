import React from "react";
import { Link } from "react-router-dom";

type Props = {
  openCategories: boolean;
  setOpenCategories: React.Dispatch<React.SetStateAction<boolean>>;
};

const Categories = ({ openCategories, setOpenCategories }: Props) => {
  return (
    <div className="h-[170px] w-[300px] text-md bg-white flex flex-col text-black justify-center items-center font-normal shadow-2xl  ">
      <Link to="/categories/men's clothing">
        <div
          className="border border-top-black w-[300px] p-1 text-center hover:cursor-pointer hover:bg-[#c5f1c5] hover:transition-all ease-in-out z-10"
          onClick={() =>
            openCategories ? setOpenCategories(false) : setOpenCategories(false)
          }
        >
          Men's Clothing
        </div>
      </Link>
      <Link to="/categories/women's clothing">
        <div className="border border-top-black w-[300px] p-1 text-center hover:cursor-pointer hover:bg-[#c5f1c5] hover:transition-all ease-in-out z-10">
          Women's Clothing
        </div>
      </Link>
      <Link to="/categories/jewelery">
        <div className="border border-top-black w-[300px] p-1 text-center hover:cursor-pointer hover:bg-[#c5f1c5] hover:transition-all ease-in-out z-10">
          Jwellery
        </div>
      </Link>
      <Link to="/categories/electronics">
        <div className="border border-top-black w-[300px] p-1 text-center hover:cursor-pointer hover:bg-[#c5f1c5] hover:transition-all ease-in-out z-10">
          Electronics
        </div>
      </Link>
    </div>
  );
};

export default Categories;
