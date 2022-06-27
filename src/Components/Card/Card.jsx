import React from "react"
import './Card.css';

 const Card = (props)=> {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`${props.coverImg}`} 
                className="card--image" 
                alt="card_image"
            />
            <div className="card--stats">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaBwRH16EFnf4sUjm_G4cm13BQfVtPp0ESSJjUi0kPw&s" className="card--star" alt="star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}
export default Card;