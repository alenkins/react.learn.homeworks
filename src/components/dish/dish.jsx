import {useState} from "react";
import {Counter} from "../counter/counter.jsx";
import styles from "./dish.module.css";
import {useAuth} from "../auth-context/use-auth.js";

export const Dish = ({dish}) => {
    const {auth} = useAuth();
    const [value, setValue] = useState(0);
    return(
        <>
            <div className = {styles.dish}>
                <div className = {styles.dishImageWrapper}>
                    <img alt = {dish.name + ' photo'} src = {dish.thumb} className = {styles.dishImage} />
                </div>
                <div className = {styles.dishInfo}>
                    <div className = {styles.dishHead}>
                        <div className = {styles.dishTitle}>{dish.name}</div>
                        <div className = {styles.dishPrice}>${dish.price}</div>
                    </div>
                    <div className = {styles.dishDescription}>
                        {dish.ingredients.map((ingredient, i) => i !== 0 ? ', ' + ingredient : ingredient)}
                    </div>
                </div>
            </div>
            <div>
                {auth.isAuth && <Counter min = {0} max = {5} plusClickHandler = {setValue} minusClickHandler = {setValue} value = {value} />}
            </div>
        </>
    );
}