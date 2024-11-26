import {Menu} from "../menu/menu.jsx";
import {Reviews} from "../reviews/reviews.jsx";
import {ReviewForm} from "../review-form/review-form.jsx";
import styles from "./restaurant.module.css";

export const Restaurant = ({activeRestaurant}) => {
    return(
        <>
            <h2 className = {styles.restaurantTitle}>{activeRestaurant.name}</h2>
            <Menu dishes = {activeRestaurant.menu} />
            <Reviews reviews = {activeRestaurant.reviews} />
            <ReviewForm />
        </>
    );
}