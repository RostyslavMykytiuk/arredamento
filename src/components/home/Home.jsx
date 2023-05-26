import React from 'react'
import Photo from '../../assets/new_photo.png'
import { Link } from 'react-router-dom'
import './Home.css'

import Photo1 from '../../assets/featured_1.png'
import Photo2 from '../../assets/table1.png'
import Photo3 from '../../assets/featured_3.png'
import Photo4 from '../../assets/featured_4.png'

import Sofa from '../../assets/sofas.png'
import Bookcase from '../../assets/bookcases.png'
import Table from '../../assets/tables.png'

import KingSofa from '../../assets/king_sofa.png'

export const Home = () => {
  return (
    <div className='home'>
        <div className="new_collection">
            <img src={Photo} alt="" />
            <div className="home_link_container" align="center">
                <h1>NEW WINTER COLLECTION</h1>
                <p>iconic furniture for your comfortable life</p>
                <Link to="/catalog">Shop all</Link>
            </div>
        </div>
        <div className="featured_collection">
            <h2>Featured Collection</h2>
            <div className="collection_items">
                <div className="collection_item">
                    <img src={Photo1} alt="" />
                    <h4 className='item_name'>Float bookshelf <br /> <small item_price>$10,977.00</small></h4>
                    <button>Add to card</button>
                </div>
                <div className="collection_item">
                    <img src={Photo2} alt="" />
                    <h4 className='item_name'>Dinning table <br /><small item_price>$9,986.00</small></h4>
                    <button>Add to card</button>
                </div>
                <div className="collection_item">
                    <img src={Photo3} alt="" />
                    <h4 className='item_name'>Modern bookshelf <br /> <small item_price>$8,678.00</small></h4>
                    <button>Add to card</button>
                </div>
                <div className="collection_item">
                    <img src={Photo4} alt="" />
                    <h4 className='item_name'>Modern sofa <br /> <small item_price>$7,889.00</small></h4>
                    <button>Add to card</button>
                </div>
            </div>
        </div>
        <div className="mission">
            <p className="mission_text">
               Our mission is to 
               offer luxury for the
               modern home.
            </p>
        </div>
        <div className="assortiment">
            <div className="assortiment_item">
                <img src={Sofa} alt="" /><br />
                <a href="">Sofas</a>
            </div>
            <div className="assortiment_item">
                <img src={Bookcase} alt="" /><br />
                <a href="">Bookcases</a>
            </div>
            <div className="assortiment_item">
                <img src={Table} alt="" /><br />
                <a href="">Tables</a>
            </div>
        </div>
        <div className="redking_sofa">
            <div className="sofa_description">
                <p className='sofa_heading'>
                    RedKing sofa Douglas
                    Orange 12
                </p>
                <p className='sofa_text'>
                    This is a universal straight sofa that transforms into a corner sofa. 
                    The corner is interchangeable (it can be rearranged to the desired side at home). 
                    In the same way, the sofa folds out (transformation mechanism - euro book),
                    turning into a one-and-a-half bed.
                </p>
            </div>
            <div className="sofa_img">
                <img src={KingSofa} alt="" />
            </div>
        </div>
        <div className="why_us">
            <h2>Why us?</h2>
            <div className="arguments">
                <div className="argument">
                    <h3>Guality</h3>
                    <p>We make furniture from quality materials, each detail is made by masters of their craft.</p>
                </div>
                <div className="argument">
                    <h3>Price</h3>
                    <p>The assortment has furniture for everyone. buy an exclusive model at a nice price.</p>
                </div>
                <div className="argument">
                    <h3>Velocity</h3>
                    <p>Orders are placed in one click. We ship our products quickly for your convenience.</p>
                </div>
            </div>
        </div>
        <div className="email_container">
            <h1>Subscribe to our emails</h1>
            <small>Be the first to know about new collections and exclusive offers.</small><br />
            <input type="email" placeholder='Email' />
        </div>
    </div>
  )
}
