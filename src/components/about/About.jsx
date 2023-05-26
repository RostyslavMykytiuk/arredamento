import React from 'react'
import './About.css'
import About1 from '../../assets/about1.png'
import About2 from '../../assets/about2.png'
import About3 from '../../assets/about3.png'
const About = () => {
  return (
    <div className='about_container'>
        <h1 className='about_heading'>About Us</h1>
        <div className="about_text">
            <div className="about_img">
                <img src={About1} alt="" />
            </div>
            <div className="about_description">
                <h2>Thoughtfully designed in our studio.</h2>
                <p>
                    The concept begins in our studio, 
                    where we design every piece to be high in 
                    comfort and rich in detail. Shape, curvature, 
                    and our signature tailoring form a collection 
                    of modern yet timeless silhouettes.
                </p>
            </div>
        </div>
        <div className="about_text">
            <div className="about_description">
                <h2>Made with hand-selected luxury materials.</h2>
                <p>
                    Each material is rich in texture and visual interest, 
                    thoughtfully-selected in an assortment of tried-and-true tones. 
                    Working with the finest artisans, we source materials that 
                    highlight the signature curvature and design of each piece. 
                    And if what we want doesn’t exist, we partner with artisans to create 
                    a one-of-a-kind material from scratch.
                </p>
            </div>
            <div className="about_img">
                <img src={About2} alt="" />
            </div>
        </div>
        <div className="about_text">
            <div className="about_img">
                <img src={About3} alt="" />
            </div>
            <div className="about_description ">
                <h2>Handcrafted to order for heritage quality.</h2>
                <p>
                    Core to every piece in our collection is 
                    quality craftsmanship and a deep appreciation for 
                    the maker’s touch. We’ve developed a network of bespoke 
                    artisans who weave generations of expertise into every piece 
                    that comes through their workroom.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About