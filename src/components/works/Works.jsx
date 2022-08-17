import React from 'react'

import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7 } from '../../assets/examples/1';

import './works.css'

const DATA = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias? Quo iure obcaecati pariatur praesentium modi labore autem! Libero eius facere possimus deserunt provident rerum laborum, fugiat maiores veritatis eos.',
        images: [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7]
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias? Quo iure obcaecati pariatur praesentium modi labore autem! Libero eius facere possimus deserunt provident rerum laborum, fugiat maiores veritatis eos.',
        images: [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7]
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias? Quo iure obcaecati pariatur praesentium modi labore autem! Libero eius facere possimus deserunt provident rerum laborum, fugiat maiores veritatis eos.',
        images: [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7]
    },
    {
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias? Quo iure obcaecati pariatur praesentium modi labore autem! Libero eius facere possimus deserunt provident rerum laborum, fugiat maiores veritatis eos.',
        images: [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7]
    },
    {
        title: 'Project 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias? Quo iure obcaecati pariatur praesentium modi labore autem! Libero eius facere possimus deserunt provident rerum laborum, fugiat maiores veritatis eos.',
        images: [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7]
    },
]

const Works = () => {
  return (
    <section>
        <h5>Project We Done</h5>
        <h2>Works</h2>

        <div className="container works__container">
            {DATA.map(({title, description, images}, index) => {
                return (
                    <article className="work__item" key={index} id={index + 1}>
                        <Swiper className='item__images'
                            modules={[Pagination, Navigation]}
                            spaceBetween={40}
                            navigation
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                        >
                            {images.map((image) => {
                                return (
                                    <SwiperSlide className='item__images-image' key={image}>
                                        <img src={image} alt="work" />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        
                        <h3>{title}</h3>
                        <small>{description}</small>
                    </article>
                );
            })}
        </div>
    </section>
  )
}

export default Works