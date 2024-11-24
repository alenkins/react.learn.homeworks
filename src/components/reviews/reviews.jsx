import {Review} from "../review/review.jsx";
import styles from "./reviews.module.css";
import classNames from "classnames";
export const Reviews = ({reviews}) => {
    const reviewsTitle = reviews.length > 0 ? "Отзывы" : "Отзывов пока нет";
    const reviewsList = Boolean(reviews.length > 0) && reviews.map(review => <div key = {review.id} className = {classNames(styles.review)}><Review review = {review} /></div>);
    return(
        <div className = {classNames(styles.reviews)}>
            <h3 className = {classNames(styles.subheader)}>{reviewsTitle}</h3>
            <div className = {classNames(styles.reviewsList)}>{reviewsList}</div>
        </div>
    );
}