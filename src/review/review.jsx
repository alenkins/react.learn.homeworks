export const Review = ({review}) => {
    return(
        <blockquote>{review.text} <cite>{review.user}</cite></blockquote>
    );
}