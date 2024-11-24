import {Fragment} from "react";
import {Menu} from "../menu/menu.jsx";
import {Reviews} from "../reviews/reviews.jsx";
import {ReviewForm} from "../review-form/review-form.jsx";
import classNames from "classnames";
import styles from "./restaurant.module.css";

export const Restaurant = ({activeRestaurant}) => {
    return(
        <Fragment>
            <h2 className = {classNames(styles.restaurantTitle)}>{activeRestaurant.name}</h2>
            <Menu dishes = {activeRestaurant.menu} />
            <Reviews reviews = {activeRestaurant.reviews} />
            <ReviewForm />
        </Fragment>
    );
}