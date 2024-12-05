import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entities/reviews/review-slice.js";
import {Review} from "./review.jsx";

export const ReviewContainer = ({reviewId}) => {
    const review = useSelector((state) => selectReviewById(state, reviewId));

    return <Review review = {review}/>
}