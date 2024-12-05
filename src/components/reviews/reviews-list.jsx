import styles from "./reviews.module.css";
import {ReviewContainer} from "../review/review-container.jsx";

export const ReviewsList = ({reviewsIds}) => reviewsIds.map(reviewId => {
    return(
        <div key = {reviewId} className = {styles.review}>
            <ReviewContainer reviewId = {reviewId} />
        </div>
    );
});