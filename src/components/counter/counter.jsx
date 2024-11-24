import classNames from "classnames";
import styles from "./counter.module.css";
export const Counter = ({value, plusClickHandler, minusClickHandler, min, max}) => {
    const onPlusClickHandler = () => {
        value < max && plusClickHandler(value + 1);
    }
    const onMinusClickHandler = () => {
        value > min && minusClickHandler(value - 1);
    }
    return(
        <div className = {classNames(styles.counter)}>
            <button className = {classNames(styles.button)} onClick={onPlusClickHandler}>+</button>
            <input className = {classNames(styles.valueContainer)} readOnly = {true} value = {value} />
            <button className = {classNames(styles.button)} onClick = {onMinusClickHandler}>-</button>
        </div>
    );
}