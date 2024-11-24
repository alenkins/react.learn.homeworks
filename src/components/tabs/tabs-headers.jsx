import classNames from "classnames";
import styles from "./tabs.module.css";
export const TabsHeaders = ({restaurants, tabClickHandler, activeRestaurant}) => {
    return(
        <div className = {classNames(styles.tabs)}>
            <ul className = {classNames("container")}>
                {
                    restaurants.map((restaurant) => {
                        const isActiveClass = activeRestaurant.id === restaurant.id ? styles.isActive : '';
                        return(
                            <li key = {restaurant.id} className = {classNames(styles.tabsTitle, isActiveClass)}>
                                <a href = {'#' + restaurant.id} onClick = {() => tabClickHandler(restaurant)}>
                                    {restaurant.name}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}