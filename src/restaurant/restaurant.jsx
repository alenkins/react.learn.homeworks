import {Fragment} from "react";
import {Menu} from "../menu/menu.jsx";
import {Reviews} from "../reviews/reviews.jsx";

export const Restaurant = ({activeRestaurant}) => {
    return(
        <Fragment>
            <Menu dishes = {activeRestaurant.menu} />
            <Reviews reviews = {activeRestaurant.reviews} />
        </Fragment>
    );
}