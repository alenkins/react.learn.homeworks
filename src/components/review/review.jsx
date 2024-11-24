import {Stars} from "../stars/stars.jsx";
import classNames from "classnames";
import styles from "./review.module.css";
export const Review = ({review}) => {
    const rating = +review.rating;
    return(
        <blockquote className = {classNames(styles.reviewBlockquote)}>
            <div className = {classNames(styles.rating)}><Stars value = {rating} count = {5} /></div>
            <div className = {classNames(styles.reviewText)}>{review.text}</div>
            <cite className = {classNames(styles.reviewAuthor)}>{review.user}</cite>
        </blockquote>
    );
}