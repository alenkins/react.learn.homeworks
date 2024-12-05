import styles from "./counter.module.css";
import {Button} from "../button/button.jsx";
export const Counter = ({value, plusClickHandler, minusClickHandler, min, max}) => {
    const onPlusClickHandler = () => {
        value < max && plusClickHandler(value + 1);
    }
    const onMinusClickHandler = () => {
        value > min && minusClickHandler(value - 1);
    }
    return(
        <div className = {styles.counter}>
            <Button onClick = {onPlusClickHandler} className = {styles.button}>+</Button>
            <input className = {styles.valueContainer} readOnly = {true} value = {value} />
            <Button onClick = {onMinusClickHandler} className = {styles.button}>-</Button>
        </div>
    );
}