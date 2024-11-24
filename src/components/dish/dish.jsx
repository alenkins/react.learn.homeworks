import {Fragment, useState} from "react";
import {Counter} from "../counter/counter.jsx";
import classNames from "classnames";
import styles from "./dish.module.css";

export const Dish = ({dish}) => {
    const [value, setValue] = useState(0);
    return(
        <Fragment>
            <div className = {classNames(styles.dish)}>
                <div className = {classNames(styles.dishImage)}>
                    <img alt = {dish.name + ' photo'} src = {dish.thumb} className = {null} />
                </div>
                <div className = {classNames(styles.dishInfo)}>
                    <div className = {classNames(styles.dishHead)}>
                        <div className = {classNames(styles.dishTitle)}>{dish.name}</div>
                        <div className = {classNames(styles.dishPrice)}>${dish.price}</div>
                    </div>
                    <div className = {classNames(styles.dishDescription)}>
                        {dish.ingredients.map((ingridient, i) => i !== 0 ? ', ' + ingridient : ingridient)}
                    </div>
                </div>
            </div>
            <div><Counter min = {0} max = {5} plusClickHandler = {setValue} minusClickHandler = {setValue} value = {value} /></div>
        </Fragment>
    );
}