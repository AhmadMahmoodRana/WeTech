import React from 'react'

const ProgramSelection = () => {
    return (
        <div className='Program w-full h-[47vh] bg-[#222] py-3 mt-3  flex flex-col lg:flex-row lg:flex lg:flex-wrap  items-center lg:justify-between justify-center '>
            <div className='Content'>
                <h1 className='text-white font-bold lg:text-[2.3rem] md:text-[1.9rem] font-serif text-center  text-[1.3rem] lg:text-left'>Which program is right for me?</h1>
                <p className='text-gray-400 lg:text-[17px] md:text-[17px] lg:text-left text-center text-[15px] lg:mt-0 mt-3'>With several bootcamps to choose from, it can be difficult to determine which <br /> one is the best fit for your schedule and preferences. Take our Program Fit quiz <br /> and we’ll let you know which one of our programs best aligns with your needs!</p>
            </div>
            <button className='bg-[#2391cf] lg:px-6 lg:py-5 rounded-lg md:text-[14px] text-white font-semibold lg:text-xl lg:text-[18px] text-[10px] px-4 py-4 lg:mt-4 mt-4 '>Take the Program Fit Quiz</button>
        </div>
    )
}

export default ProgramSelection
