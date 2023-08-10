import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icon"
export default function PRO(props) {
    let rating = props.rating;
    const arr = [];

    for (let i= 1;i<=5;i++){
        if (i<=rating) arr.push(<FontAwesomeIcon icon={faStar}color="green"/>)
        else arr.push(<FontAwesomeIcon icon={faStar} color="black"/>)
        
    }
  return (
    <div>PRO</div>
  )
}
