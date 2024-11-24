import classNames from "classnames";
import styles from "./star.module.css";
export const Star = ({value, number}) => {
    const isSelected = value > number ? classNames(styles.selectedStar) : "";
    return <span className = {classNames(styles.star, isSelected)} />
}