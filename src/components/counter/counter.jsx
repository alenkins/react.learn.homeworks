import styles from "./counter.module.css";
export const Counter = ({value, plusClickHandler, minusClickHandler, min, max}) => {
    const onPlusClickHandler = () => {
        value < max && plusClickHandler(value + 1);
    }
    const onMinusClickHandler = () => {
        value > min && minusClickHandler(value - 1);
    }
    return(
        <div className = {styles.counter}>
            <button className = {styles.button} onClick={onPlusClickHandler}>+</button>
            <input className = {styles.valueContainer} readOnly = {true} value = {value} />
            <button className = {styles.button} onClick = {onMinusClickHandler}>-</button>
        </div>
    );
}