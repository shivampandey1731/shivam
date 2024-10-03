import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { text: 'Great experience! Everything was well organized and enjoyable.', name: 'Raj Gautam' },
    { text: 'The tour guides were fantastic and the destinations were breathtaking.', name: 'Shyam Mishra' },
    { text: 'Excellent service and memorable experiences. Highly recommend!', name: 'Riya Pathak' },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.text}"</p>
              <span>{testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
