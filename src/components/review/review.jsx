import {Stars} from "../stars/stars.jsx";
import styles from "./review.module.css";
export const Review = ({review}) => {
    const rating = review.rating;
    return(
        <blockquote className = {styles.reviewBlockquote}>
            <div className = {styles.rating}><Stars value = {rating} count = {5} /></div>
            <div className = {styles.reviewText}>{review.text}</div>
            <cite className = {styles.reviewAuthor}>{review.user}</cite>
        </blockquote>
    );
}