import {useState} from "react";
import {TabsHeaders} from "./tabs-headers.jsx";
import {Restaurant} from "../restaurant/restaurant.jsx";
import {Container} from "../container/container.jsx";
export const Tabs = ({restaurants}) => {
    const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
    const tabClickHandler = obj => setActiveRestaurant(obj);
    return(
        <>
            <TabsHeaders restaurants = {restaurants} tabClickHandler = {tabClickHandler} activeRestaurant = {activeRestaurant} />
            <Container>
                <Restaurant key = {activeRestaurant.id} activeRestaurant = {activeRestaurant} />
            </Container>
        </>
    );
}