import React, {useEffect} from 'react';
import './main.css'
import img from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.webp'
import img6 from '../../Assets/img6.webp'



import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'ADVENTURE HISTORY',
      fees: '$850',
      description: 'Machu Picchu is a mysterious Incan city set high in the Andes Mountains, famous for its ancient ruins and panoramic views.'
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Great Barrier Reef',
      location: 'Australia',
      grade: 'NATURE DIVE',
      fees: '$950',
      description: 'Explore the world’s largest coral reef system with vibrant marine life and stunning underwater experiences.'
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: 'Santorini',
      location: 'Greece',
      grade: 'ROMANTIC RELAX',
      fees: '$670',
      description: 'Known for its whitewashed buildings with blue domes, Santorini offers breathtaking views and serene sunsets.'
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: 'Kyoto',
      location: 'Japan',
      grade: 'CULTURAL HERITAGE',
      fees: '$620',
      description: 'Kyoto is the heart of traditional Japanese culture, with ancient temples, beautiful gardens, and seasonal cherry blossoms.'
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: 'Banff National Park',
      location: 'Canada',
      grade: 'WILDLIFE ADVENTURE',
      fees: '$790',
      description: 'A stunning natural wonder with turquoise lakes, towering mountains, and a haven for outdoor enthusiasts and wildlife lovers.'
    },
  ];



const Main = () => {
    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                  Most Visited destinations  
                </h3>
            </div>

            <div className="secContent grid">

               {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{

                return(
                    <div key={id} data-aos="fade-up" className="singleDestination">

                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className="continent flex">
                            <HiOutlineLocationMarker className='icon'/>
                            <span className="name">{location}</span>
                            </span>

                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className='btn flex'>
                                DETAILS <HiOutlineClipboardCheck className="icon"/>
                            </button>
                        </div>
                    </div>
                )
                })
               } 
            </div>
        </section>
    )
}

export default Main;