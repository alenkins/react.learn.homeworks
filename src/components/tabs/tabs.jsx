import {useState} from "react";
import {Container} from "../container/container.jsx";
import {RestaurantContainer} from "../restaurant/restaurant-container.jsx";
import {TabsHeadersContainer} from "./tabs-headers/tabs-headers-container.jsx";
import classNames from "classnames";
import styles from "./tabs.module.css";
export const Tabs = ({restaurantsIds}) => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0]);

    const tabClickHandler = id => {
        setActiveRestaurantId(id);
    };
    return(
        <>
            <div className = {styles.tabs}>
                <Container>
                    <ul>
                        {
                            restaurantsIds.map(id => {
                                return (
                                    <TabsHeadersContainer
                                        key = {id}
                                        isActive = {activeRestaurantId === id}
                                        id = {id}
                                        tabClickHandler = {tabClickHandler}
                                        className = {classNames(styles.tabsTitle)}
                                    />
                                )
                            })
                        }
                    </ul>
                </Container>
            </div>
            <Container>
                <RestaurantContainer activeRestaurantId = {activeRestaurantId} />
            </Container>
        </>
    );
}