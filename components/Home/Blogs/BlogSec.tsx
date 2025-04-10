import Image from 'next/image';

const blogs = [
    {
        title: 'Web 3.0: The Future of Decentralized and Interconnected Web',
        excerpt:
            'Web 3.0, also known as the decentralized web, is the next phase in the evolution of the internet. While the first phase (Web 1.0) was characterized by static websites and the second phase (Web 2.0) was characterized by interactive and user-generated content, Web 3.0 is defined by decentralized applications (dApps), ...',
        author: 'Kristin Watson',
        date: 'Jun 27, 2020',
        readTime: '6 min read',
        img: '/images/84.jpg',
    },
    {
        title: 'Web 3.0: The Future of Decentralized and Interconnected Web',
        excerpt:
            'Web 3.0, also known as the decentralized web, is the next phase in the evolution of the internet. While the first phase (Web 1.0) was characterized by static websites and the second phase (Web 2.0) was characterized by interactive and user-generated content, Web 3.0 is defined by decentralized applications (dApps), ...',
        author: 'Kristin Watson',
        date: 'Jun 27, 2020',
        readTime: '7 min read',
        img: '/images/blog-img-two.jpg',
    },
    {
        title: 'Web 3.0: The Future of Decentralized and Interconnected Web',
        excerpt:
            'Web 3.0, also known as the decentralized web, is the next phase in the evolution of the internet. While the first phase (Web 1.0) was characterized by static websites and the second phase (Web 2.0) was characterized by interactive and user-generated content, Web 3.0 is defined by decentralized applications (dApps), ...',
        author: 'Kristin Watson',
        date: 'Jun 27, 2020',
        readTime: '8 min read',
        img: '/images/blog-img-three.jpg',
    },

];

export default function BlogSec() {
    return (
        <section className="bg-[#f4fafe] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">FROM OUR BLOG</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    We create blogs to help you keep updated with all latest technologies, updates, and other stuff going in or around Mansa InfoTech! So, look, read and keep in touch.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                            <div className="h-48 w-full relative">
                                <Image
                                    src={blog.img}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-md font-semibold text-[#000] mb-2">{blog.title}</h3>
                                <p className="text-sm text-gray-600">{blog.excerpt}</p>
                                <div className="flex items-center gap-3 mt-5">
                                    <Image
                                        src="/images/user.png"
                                        alt={blog.author}
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-medium">{blog.author}</p>
                                        <p className="text-xs text-gray-500">{blog.date} · {blog.readTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
