import React, {useState, useEffect} from 'react'
import slide1 from './img/slide1.jpg'
import slide2 from './img/slide2.jpg'
import slide3 from './img/slide3.jpg'
import slide4 from './img/slide4.jpg'
import slide5 from './img/slide5.jpg'
import '../styles/Slider.css'


const img = [
    <img key={slide1} src={slide1} alt={'photos of dishes'} />,
    <img key={slide2} src={slide2} alt={'photos of dishes'} />,
    <img key={slide3} src={slide3} alt={'photos of dishes'} />,
    <img key={slide4} src={slide4} alt={'photos of dishes'} />,
    <img key={slide5} src={slide5} alt={'photos of dishes'} />,
]

function Slider() {
    // Current slide index
    const [activeIndex, setActiveIndex] = useState(0);

    // Хук Effect
    useEffect(() => {
        // Starting the interval
        const interval = setInterval(() => {
            // Changing the state
            setActiveIndex((current) => {
                // Calculate the index of the next slide that should be displayed
                const res = current === img.length - 1 ? 0 : current + 1
                //Returning the index
                return res
            })
        }, 3000)
        // Turn off the interval
        return () => clearInterval()
    }, [])

    // Calculate the index of the previous slide
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    // Calculate the index of the next slide
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                    key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className="slider-img"
                    key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                    key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )
    }

    export default Slider





