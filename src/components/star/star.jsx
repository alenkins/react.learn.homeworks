import classNames from "classnames";
import styles from "./star.module.css";
export const Star = ({value, number}) => {
    return <span
        className = {classNames(
            styles.star, {
                [styles.selectedStar]: value > number
            }
        )}
    />
}