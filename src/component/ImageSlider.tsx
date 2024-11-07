import './ImageSlider.css'
import {useState} from "react";

type Slide = {
    url: string,
    title:string
}


export default function ImageSlider(props: {Slides: Slide[]}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function goToPrevious(){
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.Slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    function goToNext(){
        const isLastSlide = currentIndex === props.Slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    function goToSLide(slideIndex: number){
        setCurrentIndex(slideIndex)
    }


    return (
        <div className="slider">


            <img className="image" src={props.Slides[currentIndex].url} alt="image slider"></img>
            <p className="title">{props.Slides[currentIndex].title}</p>
            <div className="leftArrow" onClick={goToPrevious}>&#8678;</div>
            <div className="rightArrow" onClick={goToNext}>&#8680;</div>
            <div className="dots">
                {props.Slides.map((slide,slideIndex)=>(
                    <div className="dot" key={slideIndex} onClick={()=>goToSLide(slideIndex)}>o</div>
                ))}
            </div>

        </div>
    )
}