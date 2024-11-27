import {Review} from "../review/review.jsx";
import styles from "./reviews.module.css";
import classNames from "classnames";
import {Title} from "../title/title.jsx";

const ReviewsList = ({reviews}) => reviews.map(review => <div key = {review.id} className = {classNames(styles.review)}><Review review = {review} /></div>);
export const Reviews = ({reviews}) => {
    const reviewsTitle = reviews.length > 0 ? "Отзывы" : "Отзывов пока нет";
    return(
        <div>
            <Title className = {classNames(styles.subheader)} tagName = "h3">{reviewsTitle}</Title>
            {
                Boolean(reviews.length > 0) &&
                <div className = {classNames(styles.reviewsList)}>
                    <ReviewsList reviews = {reviews}/>
                </div>
            }
        </div>
    );
}