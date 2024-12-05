import {Tabs} from "./tabs.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurants/restaurant-slice.js";

export const TabsContainer = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);
    return <Tabs restaurantsIds = {restaurantsIds} />
}