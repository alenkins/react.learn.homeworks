import {Menu} from "../menu/menu.jsx";
import {Reviews} from "../reviews/reviews.jsx";
import {ReviewForm} from "../review-form/review-form.jsx";
import {Title} from "../title/title.jsx";
import styles from "./restaurant.module.css";

export const Restaurant = ({activeRestaurant}) => {
    return(
        <>
            <Title tagName = 'h2' className = {styles.restaurantTitle}>{activeRestaurant.name}</Title>
            <Menu dishes = {activeRestaurant.menu} />
            <Reviews reviews = {activeRestaurant.reviews} />
            <ReviewForm />
        </>
    );
}