import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
const ImmersiveProgram = () => {

    const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
    return (
        <div className='w-full h-auto bg-[whitesmoke] pt-14 flex flex-col items-center pb-5' >

            {/* IMMERSIVE CONTENT */}
            <div className='top-content flex flex-col justify-center items-center'>
                <h3 className='text-[#2391cf] font-semibold'>All Courses</h3>
                <h1 className='text-black font-sans font-bold lg:text-[3rem] md:text-[2.4rem] text-[1.8rem]'>Our Modules</h1>
                <p className='text-center text-gray-600 lg:text-[19px] md:16px text-[14px]  4px mt-5'>Our modules are based on current technology trends and marketplace demand from industry leaders. <br /> We cultivate a passion for discovering, training and learning, a necessary quality in today’s rapidly <br /> changing programming era.</p>
            </div>

            {/* IMMERSIVE CARD */}

            <div className='main-container flex flex-wrap w-full justify-center gap-3 md:pt-20 pt-10'>
            <div className='immersive-1  w-[260px] h-[380px] rounded-[10px] flex flex-col justify-between xl:mt-0 mt-3'>
                    <button className='bg-[#2391cf] max-w-[100px] mt-[-13px] py-1 ml-4 rounded-md text-white text-sm font-semibold'>Free Class</button>
                    <div className='immersive-content-div w-full h-[167px] rounded-b-[8px]'>
                        <h1 className='font-bold text-white text-[1.2rem] ml-6 mt-10'>2 MONTH FREE BOOTCAMP</h1>
                        <hr className='border border-gray-300 mt-5' />
                      <Link to='/course1'> <button className='float-right bg-[#2391cf] px-3 text-white rounded-[6px] mr-2 mt-3'>View</button></Link>
                    </div>

                </div>
                <div className='immersive-2 w-[260px] h-[380px] rounded-[10px] flex flex-col justify-between xl:mt-0 mt-3'>
                    <button className='bg-[#2391cf] max-w-[100px] mt-[-13px] py-1 ml-4 rounded-md text-white text-sm font-semibold'>Paid Class</button>
                    <div className='immersive-content-div w-full h-[110px] rounded-b-[8px]'>
                        <h1 className='font-bold text-white text-[1.2rem] ml-6 mt-3'>LET'S DO I.T</h1>
                        <hr className='border border-gray-300 mt-5' />
                        <button className='float-right bg-[#2391cf] px-3 text-white rounded-[6px] mr-2 mt-3'>View</button>
                    </div>

                </div>
                <div className='immersive-3 w-[260px] h-[380px] rounded-[10px] flex flex-col justify-between xl:mt-0 mt-3'>
                    <button className='bg-[#2391cf] max-w-[100px] mt-[-13px] py-1 ml-4 rounded-md text-white text-sm font-semibold'>Paid Class</button>
                    <div className='immersive-content-div w-full h-[167px] rounded-b-[8px]'>
                        <h1 className='font-bold text-white text-[1.2rem] ml-6 mt-3'>AWS SOLUTION ARCHITECTURE/CLOUD COMPUTING</h1>
                        <hr className='border border-gray-300 mt-5' />
                     <Link to={'/course3'}> <button className='float-right bg-[#2391cf] px-3 text-white rounded-[6px] mr-2 mt-3'>View</button></Link>
                    </div>

                </div>
                <div className='immersive-4 w-[260px] h-[380px] rounded-[10px] flex flex-col justify-between xl:mt-0 mt-3'>
                    <button className='bg-[#2391cf] max-w-[100px] mt-[-13px] py-1 ml-4 rounded-md text-white text-sm font-semibold'>Paid Class</button>
                    <div className='immersive-content-div w-full h-[138px] rounded-b-[8px]'>
                        <h1 className='font-bold text-white text-[1.2rem] ml-6 mt-3'>FREELANCING AND BIDDING</h1>
                        <hr className='border border-gray-300 mt-5' />
                        <button className='float-right bg-[#2391cf] px-3 text-white rounded-[6px] mr-2 mt-3'>View</button>
                    </div>

                </div>

            </div>

            {/* IMMERSIVE COUNTER */}
            <div className='w-[80%] h-auto min-h-[300px] flex flex-wrap justify-center items-center rounded-lg counter mt-10' ref={sectionRef} show={isVisible}>
                <div className='counter-content gap-3 flex w-[260px] xl:mt-0 mt-3'>
                    <hr className='border-2 h-[100px]' />
                    <div className='content'>
                        <div className='flex text-white font-bold text-[3rem] gap-1'>
                            <CountUp end={94} />
                            <h1>+</h1>
                        </div>
                        <h3 className='text-white ml-3 text-xl'>Projects</h3>
                    </div>
                </div>
                <div className='counter-content gap-3 flex w-[260px] xl:mt-0 mt-3'>
                    <hr className='border-2 h-[100px]' />
                    <div className='content'>
                        <div className='flex text-white font-bold text-[3rem] gap-1'>
                            <CountUp end={20} />
                            <h1>+</h1>
                        </div>
                        <h3 className='text-white ml-3 text-xl'>Mobile Apps</h3>
                    </div>
                </div>
                <div className='counter-content gap-3 flex w-[260px] xl:mt-0 mt-3'>
                    <hr className='border-2 h-[100px]' />
                    <div className='content'>
                        <div className='flex text-white font-bold text-[3rem] gap-1'>
                            <CountUp end={37} />
                            <h1>+</h1>
                        </div>
                        <h3 className='text-white ml-3 text-xl'>Capstone Projects</h3>
                    </div>
                </div>
                <div className='counter-content gap-3 flex w-[260px] xl:mt-0 mt-3'>
                    <hr className='border-2 h-[100px]' />
                    <div className='content'>
                        <div className='flex text-white font-bold text-[3rem] gap-1'>
                            <CountUp end={1670} />
                            <h1>+</h1>
                        </div>
                        <h3 className='text-white ml-3 text-xl'>Challenges</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ImmersiveProgram
