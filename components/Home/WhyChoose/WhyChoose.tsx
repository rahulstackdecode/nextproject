import React from "react";

export default function WhyChoose() {
    const features = [
        {
            title: "Fast & Reliable",
            description: "Experience blazing-fast load times and rock-solid performance on any device.",
            icon: "⚡",
        },
        {
            title: "Secure Platform",
            description: "We prioritize your data and privacy with end-to-end encryption and modern security.",
            icon: "🔒",
        },
        {
            title: "User-Friendly",
            description: "Enjoy an intuitive, clean interface designed for seamless interaction.",
            icon: "👍",
        },
        {
            title: "Progressive Web App",
            description: "Install the app on mobile or desktop and use it offline anytime.",
            icon: "📱",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
                <p className="text-gray-500 mb-12 text-sm md:text-base">
                    Our platform is designed to give you the best social experience with speed, security, and simplicity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                            <div className="text-4xl mb-3">{feature.icon}</div>
                            <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
