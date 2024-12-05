import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../redux/entities/restaurants/restaurant-slice.js";
import {TabHeader} from "./tab-header.jsx";

export const TabsHeadersContainer = ({isActive, id, tabClickHandler}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    return <TabHeader restaurant = {restaurant} isActive = {isActive} tabClickHandler = {tabClickHandler} />;
}