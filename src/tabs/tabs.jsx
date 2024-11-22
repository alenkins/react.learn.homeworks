import {Fragment, useState} from "react";
import {TabsHeaders} from "./tabs-headers.jsx";
import {Restaurant} from "../restaurant/restaurant.jsx";

export const Tabs = ({restaurants}) => {
    const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
    const tabClickHandler = obj => setActiveRestaurant(obj);
    return(
        <Fragment>
            <TabsHeaders restaurants = {restaurants} tabClickHandler = {tabClickHandler} activeRestaurant = {activeRestaurant} />
            <div className="tabs-content">
                <div className = "tabs-panel is-active">
                    <Restaurant key = {activeRestaurant.id} activeRestaurant = {activeRestaurant} />
                </div>
            </div>
        </Fragment>
    );
}