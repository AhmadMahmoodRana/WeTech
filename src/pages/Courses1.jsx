import React, { useState } from "react";
import aws from "../assets/courses_09.jpeg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Course1 = () => {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);
  const [arrow4, setArrow4] = useState(false);
  const [arrow5, setArrow5] = useState(false);
  const [arrow6, setArrow6] = useState(false);
  const [arrow7, setArrow7] = useState(false);
  const [arrow8, setArrow8] = useState(false);
  const [arrow9, setArrow9] = useState(false);
  const [arrow10, setArrow10] = useState(false);

  return (
    <div className="w-full h-auto flex flex-col items-center pb-[100px]">
      <div className="main bg-[#2a91cf] w-full h-[250px] md:h-[350px] flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-[2rem] md:text-[3rem] text-center">
          3 Months Base Class
        </h1>
        <h3 className="text-center text-white flex gap-2 md:gap-4 justify-center text-sm md:text-base">
          <a className="hover:underline">Home</a> <span>></span> Courses{" "}
          <span>></span>
          <a className="underline">Aws Cloud Certification</a>
        </h3>
      </div>
      <div className="all-content w-[90%] h-auto  flex flex-col items-center">
        <h1 className="text-black text-[1.8rem] md:text-[2.2rem] mt-6 uppercase font-semibold">
          Aws Cloud Certification
        </h1>
        <img
          src={aws}
          className="w-full md:w-[80%] rounded-md my-4"
          alt="Freelancing & Bidding Banner"
        />
      </div>

      <section className="text-gray-600 w-[90%] body-font bg-[#f8f8f8] mt-10 py-10">
        <div className="w-full flex flex-col items-center pb-10">
          <h3 className="text-[1.4rem] md:text-[1.8rem] text-center">
            WHAT IN IT!
          </h3>
          <p className="text-[1rem] text-center md:text-[1.1rem] text-gray-600 w-full md:w-[80%] lg:w-[800px]">
            The curriculum for Bootcamp Prep includes lectures, workshops,
            pair-programming, coding chellenges and a capstone project -- menu
            of the same projects you will fine in our immersive program, which
            is why Bootcamp Prep is great pratice for ultimately enrolling in a
            coding bootcamp. Bootcamp Prep courses (espically Prep in 60 Days)
            are demanding and intense. They are for true beginners (anyone who
            has never written any code before), and we recommend it to only
            those who are actually considering attending a coding bootcamp.
          </p>
        </div>

        {/* Repeat similar blocks for STEP 2, 3, etc. */}
      </section>
    </div>
  );
};

export default Course1;
