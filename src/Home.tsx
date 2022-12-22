import { TbTruckDelivery, TbFreeRights } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import Products from "./Products";
import { Link } from "react-router-dom";
import Contact from "./Contact";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="pt-[40px] flex flex-col gap-[200px] md:gap-10">
      <div className="bg-gradient-to-r from-[#fdebbd] to-[#f6e5cf] h-[800px] flex flex-col md:flex-row   items-center justify-center gap-5 md:h-[700px]  md:gap-10">
        <div className=" w-[45%] md:w-[35%] flex flex-col gap-3 md:gap-7 ">
          <h1 className="text-xl pt-[60px] md:text-6xl font-bold font-heading ">
            <span className="text-red-500 ">
              Sale 20% Off <br />
            </span>
            On Everything
          </h1>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum
            non natus dolor recusandae maiores explicabo laudantium cumque
            temporibus aut magnam excepturi, facere autem consequuntur?
          </p>
          <Link to="/products">
            <button className="bg-red-500 text-white h-[30px] md:h-[40px] w-[100px] md:w-[150px] text-sm hover:bg-white hover:text-red-500 hover:transition-all 3s ease-in-out">
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
      <div className="h-[300px] flex flex-col  items-center justify-center gap-10 ">
        <div className="flex flex-col  items-center justify-center gap-2">
          <h1 className="text-2xl md:text-4xl font-bold font-heading">
            Why Shop With US
          </h1>
          <div className="h-1 w-[50px] md:w-[100px] bg-red-500"></div>
        </div>
        <div className=" flex flex-col md:flex-row items-center gap-10 text-white">
          <div className="md:w-[300px] w-[200px] h-[150px] md:h-[200px] bg-slate-800 flex flex-col items-center p-5 gap-2 ">
            <TbTruckDelivery className="text-5xl" />
            <h4 className="text-md md:text-lg font-bold font-heading">
              Fast Delivery
            </h4>
            <p className="text-xs md:text-sm text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Incidunt, quia?
            </p>
          </div>
          <div className="md:w-[300px] w-[200px] h-[150px] md:h-[200px] bg-slate-800 flex flex-col items-center p-5 gap-2">
            <TbFreeRights className="text-5xl" />
            <h4 className="text-md md:text-lg  font-bold font-heading">
              Free Shipping
            </h4>
            <p className="text-xs md:text-sm text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
              nemo!
            </p>
          </div>
          <div className="md:w-[300px] w-[200px] h-[150px] md:h-[200px] bg-slate-800 flex flex-col items-center p-5 gap-2">
            <SlBadge className="text-5xl" />
            <h4 className="text-md md:text-lg  font-bold font-heading">
              Best Quality
            </h4>
            <p className="text-xs md:text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, modi!
            </p>
          </div>
        </div>
      </div>
      <Products />
      <Contact />
    </div>
  );
};

export default Home;
