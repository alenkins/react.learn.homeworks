import {useState} from "react";
import {Counter} from "../counter/counter.jsx";
import classNames from "classnames";
import styles from "./dish.module.css";

export const Dish = ({dish}) => {
    const [value, setValue] = useState(0);
    return(
        <>
            <div className = {classNames(styles.dish)}>
                <div className = {classNames(styles.dishImageWrapper)}>
                    <img alt = {dish.name + ' photo'} src = {dish.thumb} className = {classNames(styles.dishImage)} />
                </div>
                <div className = {classNames(styles.dishInfo)}>
                    <div className = {classNames(styles.dishHead)}>
                        <div className = {classNames(styles.dishTitle)}>{dish.name}</div>
                        <div className = {classNames(styles.dishPrice)}>${dish.price}</div>
                    </div>
                    <div className = {classNames(styles.dishDescription)}>
                        {dish.ingredients.map((ingredient, i) => i !== 0 ? ', ' + ingredient : ingredient)}
                    </div>
                </div>
            </div>
            <div><Counter min = {0} max = {5} plusClickHandler = {setValue} minusClickHandler = {setValue} value = {value} /></div>
        </>
    );
}