import {Dish} from "../dish/dish.jsx";
import classNames from "classnames";
import styles from "./menu.module.css";
export const Menu = ({dishes}) => {
    return(
        <div className = {classNames(styles.menu)}>
            {
                dishes.map((dish) => <div key = {dish.id} className = {classNames(styles.menuDish)}><Dish dish = {dish} /></div>)
            }
        </div>
    );
}