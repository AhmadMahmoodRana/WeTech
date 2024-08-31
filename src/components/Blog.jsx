import React from 'react'

const Blog = () => {
    return (
        <section class="text-gray-600 body-font pt-5">
         <div className='top-content flex flex-col justify-center items-center'>
                <h3 className='text-[#2391cf] font-semibold'>Blog & Posts</h3>
                <h1 className='text-black font-sans font-bold lg:text-[2.6rem] md:text-[2.2rem] text-[1.8rem]'>Unleashing Pakistan’s IT Potential Globally</h1>
            </div>
            <div class="container px-10 py-24 mx-auto">
                <div class="flex flex-wrap -m-4 justify-center">
                    <div class="p-4 w-[440px]">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div class="h-[300px] pt-6 md:w-[440px]  object-cover object-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("./src/assets/project5.jpg")' }} alt="blog">
                                <h1 className='text-white bg-[#2a91cf] w-[100px] text-center py-1 mx-14 rounded-lg'>Freelancing</h1>
                            </div>
                            <div class="p-6">
                            <p className='text-[#2a91cf] underline pb-2'>11 Nov,2023</p>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Freelancing trends in 2023</h1>
                                <p class="leading-relaxed mb-3">the rise of remote work has further accelerated freelancing trends in Pakistan. With a growing number of companies worldwide embracing virtual collaboration, Pakistani freelancers are finding increased demand for their services across borders.</p>

                            </div>
                        </div>
                    </div>
                    <div class="p-4 w-[440px]">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div class=" h-[300px] pt-6 md:w-[440px]  object-cover object-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("./src/assets/project4.jpg")' }} alt="blog">
                                <h1 className='text-white bg-[#2a91cf] w-[120px] text-center py-1 mx-14 rounded-lg '>Programming</h1>
                            </div>
                            <div class="p-6">
                            <p className='text-[#2a91cf] underline pb-2'>11 Nov,2023</p>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Programming trends in 2023</h1>
                                <p class="leading-relaxed mb-3">Tech-related freelancing, including web development, graphic design, and digital marketing, remains a dominant force in the Pakistani freelancing landscape. The country's pool of talented IT professionals has positioned it as a competitive player in the global freelancing market.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="p-4 w-[440px]">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div class="h-[300px] pt-6 md:w-[440px]  object-cover object-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("./src/assets/project2.jpg")' }} alt="blog">
                                <h1 className='text-white bg-[#2a91cf] w-[100px] text-center py-1 mx-14 rounded-lg '>Marketing</h1>
                            </div>
                            <div class="p-6">
                            <p className='text-[#2a91cf] underline pb-2'>11 Nov,2023</p>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Marketing trends in 2022</h1>
                                <p class="leading-relaxed mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
