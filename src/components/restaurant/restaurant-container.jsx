import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/restaurant-slice.js";
import {Restaurant} from "./restaurant.jsx";

export const RestaurantContainer = ({activeRestaurantId}) => {
    const activeRestaurant = useSelector((state) => selectRestaurantById(state, activeRestaurantId));

    return <Restaurant key = {activeRestaurant.id} activeRestaurant = {activeRestaurant} />;
}