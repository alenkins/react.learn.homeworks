import {Authorization} from "../authorization/authorization.jsx";
import {SwitchTheme} from "../switch-theme/switch-theme.jsx";
import styles from "./header.module.css";

export const Header = () => {
    return (
        <header className = {styles.header}>
            <Authorization />
            <SwitchTheme />
        </header>
    );
}