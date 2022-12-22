import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-full h-[550px] md:h-[450px] bg-black flex  flex-col items-center text-white p-[50px] pt-[60px] md:mt-[100px]">
      <div className="flex flex-col md:flex-row items-center justify-around w-full p-[70px] gap-10 md:gap-0">
        <div className="flex flex-col  gap-2 md:gap-5 w-[300px] md:w-[500px] text-center">
          <span className="font-heading text-xl  md:text-3xl ">
            Give your inbox a{" "}
            <span className="font-italic text-3xl md:text-5xl  ">refresh.</span>
          </span>{" "}
          <p className="text-md md:text-lg">
            10% off your first order when you sign up for our plastic-free and
            spam-free emails.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 ">
          <div className="flex gap-2 md:gap-5">
            <input
              type="text"
              placeholder="Enter email address"
              className="h-7 md:h-8 w-[180px] md:w-[400px] px-2 md:px-5"
            />
            <button className="bg-white text-black w-[100px] hover:bg-slate-400 ">
              Subscribe
            </button>
          </div>
          <div className="flex gap-5 text-3xl">
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-[300px] md:w-full h-[1px] bg-white"></div>
      <div className="mt-[25px] md:mt-[50px] ">
        Developed by- <span className="font-heading">Aparna Pandey</span>
      </div>
    </div>
  );
};

export default Contact;
