import React from 'react'
import { Carousel } from 'react-responsive-carousel'
const OurGradeStudent = () => {
    return (
        <div className='footer w-full h-[60vh] mt-8'>
            <div>
                <Carousel
                    showThumbs={false}
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false} // Optionally hide the status indicator as well
                    interval={3000} // Adjust the speed of auto-sliding (in milliseconds)
                    stopOnHover={false} // Carousel continues even if you hover over it
                >
                    <div className='flex flex-col justify-center items-center h-[60vh]'>
                        <div className='image w-[100px] bg-[url("./assets/test-male.png")] rounded-full bg-cover h-[100px] bg-center bg-no-repeat'>
                        </div>
                        <h3 className='text-white font-bold mt-3'>Usman Sami</h3>
                        <p className='text-sm font-light text-blue-400 mt-2'>Front End Developer</p>
                        <p className='sm:w-[600px] w-[300px] text-white mt-4'>The curriculum is not just about learning, it's about applying. The real-world projects were my
                            favorite part. They prepared me for the complexities of the IT industry, making my transition into
                            the workforce seamless.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center h-[60vh]'>
                        <div className='image w-[100px] bg-[url("./assets/test-female.png")] rounded-full bg-cover h-[100px] bg-center bg-no-repeat'>
                        </div>
                        <h3 className='text-white font-bold mt-3'>Samreen Zareen</h3>
                        <p className='text-sm font-light text-blue-400 mt-2'>UI/Ux Designer</p>
                        <p className='sm:w-[600px] w-[300px] text-white mt-4'>These courses are a goldmine of practical knowledge. The instructors are industry experts, and the
                    skills I gained landed me a job even before I finished the program. It's an investment that pays
                    off.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center h-[60vh]'>
                        <div className='image w-[100px] bg-[url("./assets/team_3.jpg")] rounded-full bg-cover h-[100px] bg-center bg-no-repeat'>
                        </div>
                        <h3 className='text-white font-bold mt-3'>Hayyan Sheikh</h3>
                        <p className='text-sm font-light text-blue-400 mt-2'>Front End Developer</p>
                        <p className='sm:w-[600px] w-[300px] text-white mt-4'>Enrolling in these IT courses was a game-changer for me. The hands-on projects gave me the
                    confidence to tackle real-world challenges. Today, I'm thriving in a dynamic tech career. Highly
                    recommended!</p>
                    </div>
                   
                </Carousel>
            </div>
        </div>
    )
}

export default OurGradeStudent
