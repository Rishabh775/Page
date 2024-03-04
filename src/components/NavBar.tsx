export default function NavBar() {
  return (
    <div className="w-3/6">
      <div className="px-14 py-6 flex justify-between items-center">
        <img src="/Logo i2campus_Header.png" alt="" />
        <div className="flex gap-x-6 font-normal ">
          <a
            className="font-bold underline underline-offset-8 decoration-4  decoration-red-700"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:font-bold  hover:underline underline-offset-8 decoration-4 decoration-red-700 "
            href="#"
          >
            About Us
          </a>
          <a
            className="hover:font-bold hover:underline underline-offset-8 decoration-4  decoration-red-700"
            href="#"
          >
            Features +
          </a>
          <a
            className="hover:font-bold hover:underline underline-offset-8 decoration-4  decoration-red-700"
            href="#"
          >
            Plans
          </a>
          <a
            className="hover:font-bold hover:underline underline-offset-8 decoration-4  decoration-red-700"
            href="#"
          >
            Blogs +
          </a>
        </div>
      </div>
    </div>
  );
}
