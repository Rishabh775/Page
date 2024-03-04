import { MdOutlineArrowOutward } from "react-icons/md";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import { IoArrowForward } from "react-icons/io5";

function App() {
  return (
    <div className=" h-screen">
      <div className=" px-10 py-10 ">
        <Home className=" h-screen ">
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
            <div className="absolute right-16 top-16">
              <p className="">MANAGEMENT & ORGANIZATION</p>
              {/* <p className="w-2/6">
                Simplify administrative tasks to save time and resources. Make
                informed decisions with robust data analytics tools. Adopt
                scalable solutions for sustainable institutional growth.
              </p> */}
              <img src="YourOrg_Unit.png" alt="" />
            </div>
            <div className="absolute top-[29.6rem] right-[38.5rem]">
              <p>ADMIN & FINANCS TEAM</p>
              <img src="YourTem_Unit.png" alt="" />
            </div>
            <div className="absolute top-[33rem] right-[57.8rem]">
              <p>TEACHER & STAFFS</p>
              <img src="/Group 73.png" alt="" />
            </div>
            <div className="absolute top-[35rem] right-[74.2rem]">
              <p> STUDENTS & PARENTS</p>
              <img src="/Your Student Unit.png" alt="" />
            </div>

            <button className="bg-red-700 rounded-xl font-thin py-1 text-white px-5 absolute right-[4.3rem] top-16">
              Contact Us{" "}
            </button>
            <button className="flex items-center gap-x-1 bg-red-700 rounded-xl  py-1 text-white px-3 absolute right-[4.2rem] top-[43.5rem]">
              Book Free Demo{" "}
              <IoArrowForward
                className="text-black bg-white rounded-full "
                size={20}
              />
            </button>
          </div>
        </Home>
      </div>
    </div>
  );
}

export default App;
