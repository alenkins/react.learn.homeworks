import classNames from "classnames";
import styles from "../tabs.module.css";

export const TabHeader = ({restaurant, isActive, tabClickHandler}) => {
    return (
        <li className = {
            classNames(
                styles.tabsTitle,
                {
                    [styles.isActive]: isActive
                }
            )
        }>
            <a href = {'#' + restaurant.id} onClick = {() => tabClickHandler(restaurant.id)}>
                {restaurant.name}
            </a>
        </li>
    );
}