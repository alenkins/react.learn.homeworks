import styles from "./reviews.module.css";
import {Title} from "../title/title.jsx";
import {ReviewsList} from "./reviews-list.jsx";

export const Reviews = ({reviews}) => {
    const reviewsTitle = reviews.length > 0 ? "Отзывы" : "Отзывов пока нет";
    return(
        <div>
            <Title className = {styles.subheader} tagName = "h3">{reviewsTitle}</Title>
            {
                Boolean(reviews.length > 0) &&
                <div className = {styles.reviewsList}>
                    <ReviewsList reviews = {reviews}/>
                </div>
            }
        </div>
    );
}