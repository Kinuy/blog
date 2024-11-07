import profilePic from '/image/profile.jpg'
import './Card.css'

export default function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"/>
            <h2 className="card-title">title</h2>
            <p className="card-text">description</p>
        </div>
    )
}