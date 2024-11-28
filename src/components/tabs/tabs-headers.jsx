import classNames from "classnames";
import styles from "./tabs.module.css";
import {Container} from "../container/container.jsx";
export const TabsHeaders = ({restaurants, tabClickHandler, activeRestaurant}) => {
    return(
        <div className = {styles.tabs}>
            <Container>
                <ul>
                    {
                        restaurants.map((restaurant) => {
                            return(
                                <li key = {restaurant.id} className = {classNames(
                                    styles.tabsTitle,
                                    {
                                        [styles.isActive]: activeRestaurant.id === restaurant.id
                                    }
                                )}>
                                    <a href = {'#' + restaurant.id} onClick = {() => tabClickHandler(restaurant)}>
                                        {restaurant.name}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </Container>
        </div>
    );
}