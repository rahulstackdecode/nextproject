import Image from "next/image";

const ratings = [
  {
    name: "Upwork",
    image: "/images/upwork.png",
    stars: 5,
    text: "100% Job Success",
  },
  {
    name: "Clutch",
    image: "/images/logo-cli-2.png",
    stars: 5,
    text: "We are rated 4.8 out of 5",
  },
  {
    name: "GoodFirms",
    image: "/images/goodfirms.png",
    stars: 5,
    text: "We are rated 5 out of 5",
  },
  {
    name: "Hotfrog",
    image: "/images/hotfrog.png",
    stars: 5,
    text: "We are rated 5 out of 5",
  },
];

export default function RatingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {ratings.map((item, index) => (
          <div
            key={index}
            className="border relative p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="mb-2 relative mx-auto w-auto text-center">
              <Image src={item.image} alt={item.name} width={120} height={40} className="mx-auto"/>
            </div>
            <div className="flex justify-center mb-2">
              {Array.from({ length: item.stars }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-700 font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
