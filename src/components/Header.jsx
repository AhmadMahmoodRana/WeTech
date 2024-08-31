import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiSolidBadgeDollar } from "react-icons/bi";
import carousel1 from "../assets/carousel1.webp"
const Header = () => {
  return (
    <div className='main w-full h-[82vh] flex'>
      <div className='content lg:w-[50%] w-full items-center lg:items-start flex flex-col justify-center xl:pl-24 lg:pl-8'>
        <h1 className='font-bold xl:text-[3.4rem] lg:text-[2.7rem] leading-[1.1] font-serif md:text-[2.2rem] lg:text-left sm:text-[2rem] text-[20px] text-center header-h1'>Revamp your career, <br/>revamp your life</h1>
        <p className='xl:text-[23px] lg:text-[21px] mt-8 xl:pr-14 lg:pr-6 md:w-[600px] sm:text-center lg:text-left md:text-[1.4rem] sm:text-[.9rem] text-center header-p'>Our software engineering bootcamps are crafted to guide individuals with little to no coding background towards becoming successful, high-earning software engineers</p>
        {/* <div className='content-card w-auto  bg-white rounded-md py-6 pl-2 max-w-[570px] mt-5'>
          <h3 className='text-[#2391cf] flex items-center sm:text-[23px] sm:leading-7 sm:gap-2 text-[17px] sm:w-full w-[300px] header-h3'><BiSolidBadgeDollar className='sm:text-[50px] text-[30px] ' />Save $2,000 on your tuition with our Back-to-School Discount</h3>
          <p className='sm:text-[18px] pr-6 mt-2 text-[14px] sm:w-full w-[300px] header-p2'>The discount is avilable for all of our 2024 Full-Time and Part-Time Coding Bootcamps and all you have to do to claim it enroll by September 16,2024
            <button className='text-[#2391cf] text-md pl-3 font-semibold underline '>View Details</button>
          </p>

        </div> */}
        <div className='button-div flex gap-3 mt-12'>
          <button className='bg-[#2391cf] text-[12px] sm:text-[16px] text-white px-6 py-3 rounded-sm'>Submit on Application</button>
          <button className='bg-[#2391cf] text-[12px] sm:text-[16px] text-white px-6 rounded-sm py-3'>Learn More</button>
        </div>
      </div>
      <div className='lg:w-[50%] hidden lg:block'>
        <Carousel
          showThumbs={false}
          showArrows={false}  
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false} // Optionally hide the status indicator as well
          interval={3000} // Adjust the speed of auto-sliding (in milliseconds)
          stopOnHover={true} // Carousel continues even if you hover over it
        >
          <div>
            <img src={carousel1} alt="Image 1" className="h-[82vh]" />

          </div>
          <div>
            <img src={carousel1} alt="Image 2" className="h-[82vh]" />
          </div>
          <div>
            <img src={carousel1} alt="Image 3" className="h-[82vh]" />
          </div>
        </Carousel>


      </div>

    </div>

  )
}

export default Header

