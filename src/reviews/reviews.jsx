import {Review} from "../review/review.jsx";

export const Reviews = ({reviews}) => {
    const reviewsTitle = reviews.length > 0 ? "Отзывы" : "Отзывов пока нет";
    const reviewsList = Boolean(reviews.length > 0) && reviews.map(review => <Review key = {review.id} review={review} />);
    return(
        <div className="card-section">
            <h3 className="subheader">{reviewsTitle}</h3>
            {reviewsList}
        </div>
    );
}