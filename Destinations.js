import React from 'react';

const Destinations = () => {
  const destinations = [
    { title: 'Destination 1', imgSrc: '/images/image1.jpg' },
    { title: 'Destination 2', imgSrc: '/images/image2.jpg' },
    { title: 'Destination 3', imgSrc: '/images/image3.jpg'},
    { title: 'Destination 4', imgSrc: '/images/image4.jpg' }, 
    { title: 'Destination 1', imgSrc: '/images/image1.jpg' },
    { title: 'Destination 2', imgSrc: '/images/image2.jpg' },
    { title: 'Destination 3', imgSrc: '/images/image3.jpg'},
    { title: 'Destination 4', imgSrc: '/images/image4.jpg' }, 
    { title: 'Destination 1', imgSrc: '/images/image1.jpg' },
    { title: 'Destination 2', imgSrc: '/images/image2.jpg' },
    { title: 'Destination 3', imgSrc: '/images/image3.jpg'},
    { title: 'Destination 4', imgSrc: '/images/image4.jpg' }, 
    { title: 'Destination 1', imgSrc: '/images/image1.jpg' },
    { title: 'Destination 2', imgSrc: '/images/image2.jpg' },
    { title: 'Destination 3', imgSrc: '/images/image3.jpg'},
    { title: 'Destination 4', imgSrc: '/images/image4.jpg' }, 
    // Ensure there is a fourth image if you expect it.
    
  ];
  

  return (
    <section id="destinations" className="destinations">
      <div className="container">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <div className="destination" key={index}>
              <img src={destination.imgSrc} alt={destination.title} />
              <h3>{destination.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
