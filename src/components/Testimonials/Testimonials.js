import React, { useState, useEffect, useCallback } from 'react';
import {
  TestimonialsContainer,
  TestimonialsWrapper,
  TestimonialsTrack,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  AuthorImage,
  AuthorInfo,
  AuthorName,
  AuthorTitle,
  TestimonialsHeader,
  DotsContainer,
  Dot
} from './Testimonials.elements';

const testimonials = [
  {
    text: "Working with this team has been transformative for our business. Their AI solutions have significantly improved our customer engagement and operational efficiency.",
    author: "Sarah Johnson",
    title: "CEO, TechVision Inc.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    text: "The web development services provided were exceptional. They delivered a modern, responsive website that perfectly represents our brand and drives results.",
    author: "Michael Chen",
    title: "Marketing Director, InnovateCorp",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    text: "Their automation solutions have saved us countless hours and improved accuracy across our processes. Highly recommended for any business looking to scale.",
    author: "Emily Rodriguez",
    title: "Operations Manager, AutomateNow",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    text: "The strategic insights and marketing automation they implemented helped us double our lead generation within months. A game-changer for our growth.",
    author: "David Thompson",
    title: "Sales Director, GrowthFirst",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    if (window.innerWidth > 1024) {
      setWidth(3); // Show 3 cards
    } else if (window.innerWidth > 768) {
      setWidth(2); // Show 2 cards
    } else {
      setWidth(1); // Show 1 card
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(current => 
        current === testimonials.length - width ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [width]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <TestimonialsContainer>
      <TestimonialsWrapper>
        <TestimonialsHeader>What Our Clients Say</TestimonialsHeader>
        <TestimonialsTrack style={{
          transform: `translateX(-${currentSlide * (100 / width)}%)`,
          width: `${(testimonials.length / width) * 100}%`
        }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>
                <AuthorImage src={testimonial.image} alt={testimonial.author} />
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsTrack>
        <DotsContainer>
          {[...Array(testimonials.length - width + 1)].map((_, index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotsContainer>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials; 