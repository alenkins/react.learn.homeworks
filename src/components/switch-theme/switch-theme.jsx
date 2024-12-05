import {Button} from "../button/button.jsx";
import styles from "./switch-theme.module.css";
import {useTheme} from "../theme-context/use-theme.js";

export const SwitchTheme = () => {
    const {theme, setTheme} = useTheme();
    return (
        <Button
            onClick = {() => setTheme(theme === "light" ? "dark" : "light")}
            className = {styles.button}
        >
            <img
                src = {theme === "light" ? "/images/moon.svg" : "/images/sun.svg"}
                alt = "Переключить тему"
                className = {styles.img}
            />
        </Button>
    );
}