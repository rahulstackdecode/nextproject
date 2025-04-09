import Image from 'next/image';
import React from 'react';
const Hero = () => {
    return (
        <div className='w-full pt-[4vh] md-pt-[18vh] h-screen bg-[#fff]'>
            <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    <div>
                        <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
                            <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white'>
                                News
                            </div>
                            <p className='text-xs sm:text-sm'> We have update our terms & Conditions.</p>
                        </div>
                        <h1 className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]'>
                            Rapidly build modern websites without ever leaving your HTML.
                        </h1>
                        <p className='text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book. </p>
                        <div className='flex mt-8 items-center space-x-4'>
                            <Image
                                src="/images/googleplay.png"
                                width={150}
                                height={150}
                                alt="Get it on Google Play"
                                className="object-contain"
                            />
                            <Image
                                src="/images/appstore.png"
                                width={150}
                                height={150}
                                alt="Get it on Google Play"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Image src="/images/banner-img.jpg" alt="hero" width={700} height={700} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero