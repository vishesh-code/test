function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This platform made our wedding planning so much easier! Our guests loved the website and we could manage everything in one place.",
      name: "Sarah & Michael",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "The templates are gorgeous and so easy to customize. We received so many compliments on our wedding website!",
      name: "Emma & James",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "The RSVP management feature alone saved us countless hours of work. Highly recommend to any engaged couple!",
      name: "Jessica & David",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-16 text-center">
          Happily Ever Afters
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <div className="text-pink-500 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <span className="font-medium text-gray-800">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection