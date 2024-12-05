import styles from "./reviews.module.css";
import {Title} from "../title/title.jsx";
import {ReviewsList} from "./reviews-list.jsx";

export const Reviews = ({reviewsIds}) => {
    const reviewsTitle = reviewsIds.length > 0 ? "Отзывы" : "Отзывов пока нет";
    return(
        <div>
            <Title className = {styles.subheader} tagName = "h3">{reviewsTitle}</Title>
            {
                Boolean(reviewsIds.length > 0) &&
                <div className = {styles.reviewsList}>
                    <ReviewsList reviewsIds = {reviewsIds} />
                </div>
            }
        </div>
    );
}