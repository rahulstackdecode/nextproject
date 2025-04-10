import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-[#f7f7f7] py-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight capitalize mb-4">
                        Life is a church that loves
                        <span className="text-[#000]">god and people.</span>
                    </h1>
                    <p className="text-lg text-gray-800 mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="relative">
                        <button className="bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg font-semibold hover:bg-blue-900 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="relative w-full h-full object-contain bg-white rounded-xl">
                    <Image
                        src="/images/banner-img.jpg"
                        alt="Prayer"
                        layout="fill"
                        objectFit="contain"
                        className=""
                    />
                </div>
            </div>
        </section>
    );
}
