import React from "react";

const Tours = () => {
  const tours = [
    {
      title: "Tour 1",
      description: "Brief description of Tour 1.",
      imgSrc: "/images/image2.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_1",
    },
    {
      title: "Tour 2",
      description: "Brief description of Tour 2.",
      imgSrc: "/images/image5.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_2",
    },
    {
      title: "Tour 3",
      description: "Brief description of Tour 3.",
      imgSrc: "/images/image6.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_3",
    },
    {
      title: "Tour 4",
      description: "Brief description of Tour 4.",
      imgSrc: "/images/image6.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_4",
    },
    {
      title: "Tour 1",
      description: "Brief description of Tour 1.",
      imgSrc: "/images/image2.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_1",
    },
    {
      title: "Tour 2",
      description: "Brief description of Tour 2.",
      imgSrc: "/images/image5.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_2",
    },
    {
      title: "Tour 3",
      description: "Brief description of Tour 3.",
      imgSrc: "/images/image6.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_3",
    },
    {
      title: "Tour 4",
      description: "Brief description of Tour 4.",
      imgSrc: "/images/image6.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_4",
    },
    {
      title: "Tour 1",
      description: "Brief description of Tour 1.",
      imgSrc: "/images/image2.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_1",
    },
    {
      title: "Tour 2",
      description: "Brief description of Tour 2.",
      imgSrc: "/images/image5.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_2",
    },
    {
      title: "Tour 3",
      description: "Brief description of Tour 3.",
      imgSrc: "/images/image6.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_3",
    },
    {
      title: "Tour 4",
      description: "Brief description of Tour 4.",
      imgSrc: "/images/image6.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_4",
    },
    {
      title: "Tour 1",
      description: "Brief description of Tour 1.",
      imgSrc: "/images/image2.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_1",
    },
    {
      title: "Tour 2",
      description: "Brief description of Tour 2.",
      imgSrc: "/images/image5.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_2",
    },
    {
      title: "Tour 3",
      description: "Brief description of Tour 3.",
      imgSrc: "/images/image6.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_3",
    },
    {
      title: "Tour 4",
      description: "Brief description of Tour 4.",
      imgSrc: "/images/1.jpg",
      link: "https://en.wikipedia.org/wiki/Tour_4",
    },
  ];

  return (
    <section id="tours" className="tours">
      <div className="container">
        <h2>Featured Tours</h2>
        <div className="tour-grid">
          {tours.map((tour, index) => (
            <div className="tour" key={index}>
              <img src={tour.imgSrc} alt={tour.title} />
              <h3>{tour.title}</h3>
              <p>
                <a href={tour.link} target="_blank" rel="noopener noreferrer">
                  {tour.description}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
