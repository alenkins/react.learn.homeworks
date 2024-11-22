import {Fragment} from "react";
import {Menu} from "../menu/menu.jsx";
import {Reviews} from "../reviews/reviews.jsx";
import {ReviewForm} from "../review-form/review-form.jsx";

export const Restaurant = ({activeRestaurant}) => {
    return(
        <Fragment>
            <Menu dishes = {activeRestaurant.menu} />
            <Reviews reviews = {activeRestaurant.reviews} />
            <ReviewForm />
        </Fragment>
    );
}