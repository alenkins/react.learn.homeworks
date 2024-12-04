import styles from "./menu.module.css";
import {DishContainer} from "../dish/dish-container.jsx";
export const Menu = ({dishesIds}) => {
    return(
        <div className = {styles.menu}>
            {
                dishesIds.map((dishId) => <div key = {dishId} className = {styles.menuDish}><DishContainer dishId = {dishId} /></div>)
            }
        </div>
    );
}