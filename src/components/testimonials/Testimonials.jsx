import React from 'react'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CLIENT from '../../assets/ya.png'
import './testimonials.css'

const DATA = [
  {
  avatar: CLIENT,
  name: 'John Doe',
  review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias? Quo iure obcaecati pariatur praesentium modi labore autem! Libero eius facere possimus deserunt provident rerum laborum, fugiat maiores veritatis eos.'
  },
  {
    avatar: CLIENT,
    name: 'John Doe',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias? Quo iure obcaecati pariatur praesentium modi labore autem! Libero eius facere possimus deserunt provident rerum laborum, fugiat maiores veritatis eos.'
  },
  {
    avatar: CLIENT,
    name: 'John Doe',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias? Quo iure obcaecati pariatur praesentium modi labore autem! Libero eius facere possimus deserunt provident rerum laborum, fugiat maiores veritatis eos.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {DATA.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="client" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials