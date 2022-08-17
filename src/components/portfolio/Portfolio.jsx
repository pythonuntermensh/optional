import React from 'react'

import PORTFOLIO from '../../assets/ya.png'
import './portfolio.css'


const DATA = [
  {id: 1,
    title: 'This is portfolio item title',
    image: PORTFOLIO,
    github: 'https://www.github.com'
  },
  {id: 2,
    title: 'This is portfolio item title',
    image: PORTFOLIO,
    github: 'https://www.github.com'
  },
  {id: 3,
    title: 'This is portfolio item title',
    image: PORTFOLIO,
    github: 'https://www.github.com'
  },
  {id: 4,
    title: 'This is portfolio item title',
    image: PORTFOLIO,
    github: 'https://www.github.com'
  },
  {id: 5,
    title: 'This is portfolio item title',
    image: PORTFOLIO,
    github: 'https://www.github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Our Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {DATA.map(({id, title, image, github}) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-buttons">
                <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href={"/examples#" + id} className='btn btn-primary' target="_blank" rel="noreferrer">Show</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio