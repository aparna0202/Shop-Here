import { TbTruckDelivery, TbFreeRights } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import Products from "./Products";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="pt-[40px] flex flex-col gap-10">
      <div className="bg-gradient-to-r from-[#fdebbd] to-[#f6e5cf] h-[700px] flex items-center justify-center gap-10">
        <div className="w-[35%] flex flex-col gap-7 items-baseline">
          <h1 className="text-6xl font-bold font-heading ">
            <span className="text-red-500 ">
              Sale 20% Off <br />
            </span>
            On Everything
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum
            non natus dolor recusandae maiores explicabo laudantium cumque
            temporibus aut magnam excepturi, facere autem consequuntur?
          </p>
          <Link to="/products">
            <button className="bg-red-500 text-white h-[40px] w-[150px] hover:bg-white hover:text-red-500 hover:transition-all 3s ease-in-out">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="../public/assets/rk_day_2_0841.webp"
          alt=""
          className="h-[100%] pt-5"
        />
      </div>
      <div className="h-[300px] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl font-bold font-heading">Why Shop With US</h1>
          <div className="h-1 w-[100px] bg-red-500"></div>
        </div>
        <div className="flex items-center gap-10 text-white">
          <div className="w-[300px] h-[200px] bg-slate-800 flex flex-col items-center p-5 gap-2 ">
            <TbTruckDelivery className="text-5xl" />
            <h4 className="text-lg font-bold font-heading">Fast Delivery</h4>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Incidunt, quia?
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-slate-800 flex flex-col items-center p-5 gap-2">
            <TbFreeRights className="text-5xl" />
            <h4 className="text-lg font-bold font-heading">Free Shipping</h4>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
              nemo!
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-slate-800 flex flex-col items-center p-5 gap-2">
            <SlBadge className="text-5xl" />
            <h4 className="text-lg font-bold font-heading">Best Quality</h4>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, modi!
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
