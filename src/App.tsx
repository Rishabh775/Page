import { MdOutlineArrowOutward } from "react-icons/md";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import { IoArrowForward } from "react-icons/io5";

function App() {
  return (
    <div className=" h-screen w-full">
      <div className=" px-10 py-10 ">
        <Home className=" h-[90vh] ">
          <div>
            <NavBar />
            <div className="w-3/6 leading-8 px-14 py-6">
              <p className="text-xl">
                Our Smart
                <span className="text-red-700 font-bold">
                  EdTech Solutions
                </span>{" "}
                Will
              </p>
              <span className="text-5xl font-[335] ">Elevate your Growth</span>
              <h1 className="text-5xl font-[335]">on Every Front</h1>
              <p className="text-lg pt-6">
                Transform education, foster collaboration, and make informed
                decisions with our solutions. Empowering management, inspiring
                teachers, and enriching the learning journey for all is our core
                focus.
              </p>
              <div className="flex gap-x-2 py-5 items-center">
                <button className="bg-red-700 rounded-md font-thin  text-white px-3">
                  Learn More
                </button>
                <MdOutlineArrowOutward
                  className="bg-red-700 rounded-md text-white "
                  size={30}
                />
              </div>
            </div>
            <div className=" absolute top-8 gap-8 left-8 w-full flex items-end">
              <div className="">
                <div className=" relative">
                  <p className=" absolute text-xl ms-4 mt-2">
                    STUDENTS <br />& PARENTS
                  </p>
                  <img src="/Your Student Unit.png" alt="" />
                </div>
              </div>
              <div className="">
                <div className=" relative">
                  <p className=" absolute text-xl ms-4 mt-2">
                    TEACHERS <br />& STAFFS
                  </p>
                  <img src="/Group 73.png" alt="" />
                </div>
              </div>
              <div className=" bottom-[14px] right-[38rem]">
                <div className=" relative">
                  <p className=" absolute text-xl ms-4 mt-2">
                    ADMINS &<br /> FINANCE TEAM
                  </p>
                  <img src="YourTem_Unit.png" alt="" />
                </div>
              </div>
              <div className=" right-10 top-8">
                <div className=" relative">
                  <div className="bottom-0 w-full rounded-bl-3xl rounded-br-3xl py-14 absolute text-white bg-[#0000005d] backdrop-blur-sm px-6">
                    <h4 className=" text-4xl uppercase">
                      Management & <br /> ORGANIZAtION
                    </h4>
                    <p className="py-6">
                      Simplify administrative tasks to save time and resources.
                      Make informed decisions with robust data analytics tools.
                      Adopt scalable solutions for sustainable institutional
                      growth.
                    </p>
                    <div className=" flex justify-between w-[300px] cursor-pointer border ps-4 pr-1 py-1 rounded-lg">
                      <button>Click to know more</button>
                      <MdOutlineArrowOutward
                        className="bg-red-700 rounded-md text-white "
                        size={20}
                      />
                    </div>
                  </div>
                  <img src="YourOrg_Unit.png" alt="" />
                </div>
              </div>
              <div></div>
              <button className="bg-red-700 rounded-xl font-thin py-1 text-white px-5 absolute right-[6.9rem] top-[1px]">
                Contact Us
              </button>
              <button className="flex items-center gap-x-1 border-4 bg-red-700 rounded-xl  py-1 text-white px-3 absolute right-[6.5rem] bottom-[1px]">
                Book Free Demo
                <IoArrowForward
                  className="text-black bg-white rounded-full "
                  size={20}
                />
              </button>
            </div>

            {/* <button className="bg-red-700 rounded-xl font-thin py-1 text-white px-5 absolute right-[3rem] top-[32px]">
              Contact Us{" "}
            </button>
            <button className="flex items-center gap-x-1 border-4 bg-red-700 rounded-xl  py-1 text-white px-3 absolute right-[2.6rem] bottom-[15px]">
              Book Free Demo{" "}
              <IoArrowForward
                className="text-black bg-white rounded-full "
                size={20}
              />
            </button> */}
          </div>
        </Home>
      </div>
    </div>
  );
}

export default App;
