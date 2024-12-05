import classNames from "classnames";
import styles from "./button.module.css";
import {useTheme} from "../theme-context/use-theme.js";

export const Button = ({type = "button", onClick, children, className}) => {
    const {theme} = useTheme();
    return(
        <button
            className = {classNames(
                className,
                styles.button,
                {
                    [styles.light]: theme === "light",
                    [styles.dark]: theme === "dark"
                }
            )}
            type = {type}
            onClick = {onClick}>
            {children}
        </button>
    );
}