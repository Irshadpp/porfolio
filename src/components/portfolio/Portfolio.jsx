import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio11.jpg'
import IMG2 from '../../assets/portfolio22.jpg'
import IMG3 from '../../assets/portfolio33.jpg'

const data = [
  {
    id : 1,
    image : IMG1,
    title : 'Social Media Website',
    github: 'https://github.com/Irshadpp/SocialMedia.git',
    demo : 'https://github.com/Irshadpp/SocialMedia.git'
  },
  {
    id : 2,
    image : IMG2,
    title : 'Ecommerce Website',
    github: 'https://github.com/Irshadpp/eCommerceWebsite.git',
    demo : 'https://github.com/Irshadpp/eCommerceWebsite.git'
  },
  {
    id : 3,
    image : IMG3,
    title : 'Netflix Clone',
    github: 'https://github.com/Irshadpp/netflixClone.git',
    demo : 'https://github.com/Irshadpp/netflixClone.git'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className="btn" target='_blank'>Github</a>
          <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
      </section>
  )
}

export default Portfolio
