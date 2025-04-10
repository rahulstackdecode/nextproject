import React from 'react'
import Image from 'next/image';
const Solutions = () => {
    const SolutionsList = [
        {
            img: '/images/84.jpg',
            title: 'Investment Strategy',
            des: 'We create tailored investment plans to maximize returns while minimizing risk our experts analyze the goals',
            linktext: 'Read More'
        },
        {
            img: '/images/84.jpg',
            title: 'Tax Filing Assistance',
            des: 'Simplify tax season with our professional support to ensure accurate filing and compliance with regulations',
            linktext: 'Read More'
        },
        {
            img: '/images/84.jpg',
            title: 'Research Consulting',
            des: 'Consultants deliver actionable insights to drive informed decisions it’s market trends, customer behavior',
            linktext: 'Read More'
        },
        {
            img: '/images/84.jpg',
            title: 'Legal Compliance',
            des: 'Ensures your business adheres to all regulations protecting you from penalties ethical and operational standards',
            linktext: 'Read More'
        }
    ]
    return (
        <div className='bg-[#f7f7f7] py-20'>
            <div className="solutions-list max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">What We Offers</h2>
                <p className="text-gray-500 mb-12 text-sm md:text-base text-center">
                    Our platform is designed to give you the best social experience with speed, security, and simplicity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SolutionsList.map((solution, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition p-4">
                            {/* <div className="w-full relative mb-4" >
                                <Image
                                    src={solution.img}
                                    alt=""
                                    fill 
                                    className="object-cover"
                                />
                            </div> */}
                            <h2 className='font-semibold text-black text-2xl mb-2'>{solution.title}</h2>
                            <p className='text-[#393939] mb-3'>{solution.des}</p>
                            <a className='text-base text-[#000] cursor-pointer'>{solution.linktext}</a>
                        </div>
                    ))};

                </div>
            </div>
        </div>
    )
}

export default Solutions