import React from 'react'
import bg3 from '../assets/bg3.png'
const Team = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-sm  title-font mb-2 text-[#BE1E2D] font-medium uppercase">Best of the Best</h1>
                    <h1 class="font-sans text-[2.5rem] mb-4 text-gray-900 font-bold">MEET OUR TEAM</h1>
                    <p class="lg:w-2/3 mx-auto  text-lg">
                    A Perfect Blend Of Creativity And Technical Wizardly.</p>
                </div>
                <div class="flex flex-wrap -m-4 px-24 justify-center">
                    <div class="p-4 min-w-[270px] max-w-[270px]  background-team-main">
                        <div class="h-full flex flex-col items-center">
                            <img alt="team" class="flex-shrink-0  w-full h-70 object-cover object-center" src={bg3} />
                            <div class="w-full background-team bg-[#f4f1f1] pt-4 pb-6">
                                <h2 class="title-font font-sans text-xl text-gray-900 mx-3 font-bold">Talha Mughal</h2>
                                <h3 class="text-[#BE1E2D] mb-3 mx-3">CEO</h3>

                            </div>
                        </div>
                    </div>
                    <div class="p-4 min-w-[270px] max-w-[270px]  background-team-main">
                        <div class="h-full flex flex-col items-center">
                            <img alt="team" class="flex-shrink-0  w-full h-70 object-cover object-center" src={bg3} />
                            <div class="w-full background-team bg-[#f4f1f1] pt-4 pb-6">
                                <h2 class="title-font font-sans text-xl text-gray-900 mx-3 font-bold">Saqib Mughal</h2>
                                <h3 class="text-[#BE1E2D] mb-3 mx-3">Full Stack Developer</h3>

                            </div>
                        </div>
                    </div>
                    <div class="p-4 min-w-[270px] max-w-[270px]  background-team-main">
                        <div class="h-full flex flex-col items-center">
                            <img alt="team" class="flex-shrink-0  w-full h-70 object-cover object-center" src={bg3} />
                            <div class="w-full background-team bg-[#f4f1f1] pt-4 pb-6">
                                <h2 class="title-font font-sans text-xl text-gray-900 mx-3 font-bold">Taimoor Munawar</h2>
                                <h3 class="text-[#BE1E2D] mb-3 mx-3">DevOps Engineer</h3>

                            </div>
                        </div>
                    </div>
                    <div class="p-4 min-w-[270px] max-w-[270px]  background-team-main">
                        <div class="h-full flex flex-col items-center">
                            <img alt="team" class="flex-shrink-0  w-full h-70 object-cover object-center" src={bg3} />
                            <div class="w-full background-team bg-[#f4f1f1] pt-4 pb-6">
                                <h2 class="title-font font-sans text-xl text-gray-900 mx-3 font-bold">Huzaifa Rao</h2>
                                <h3 class="text-[#BE1E2D] mb-3 mx-3">UI Developer</h3>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Team
