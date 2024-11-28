import {Dish} from "../dish/dish.jsx";
import styles from "./menu.module.css";
export const Menu = ({dishes}) => {
    return(
        <div className = {styles.menu}>
            {
                dishes.map((dish) => <div key = {dish.id} className = {styles.menuDish}><Dish dish = {dish} /></div>)
            }
        </div>
    );
}