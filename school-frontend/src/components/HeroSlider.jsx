import { useState, useEffect } from "react";

function HeroSlider() {

  const slides = [
    "/b1.webp",
    "/b2.webp",
    "/b3.webp"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden">

      {/* Background Image */}
      <img
        src={slides[current]}
        alt="School Banner"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our School
        </h2>

        <p className="text-lg mb-6">
          A place where students learn, grow, and succeed.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
          Explore More
        </button>
      </div>

    </section>
  );
}

export default HeroSlider;