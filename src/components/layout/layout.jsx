import {ScrollProgress} from "../scroll-progress/scroll-progress.jsx";
import styles from "./layout.module.css";
export const Layout = ({children}) => {
    return(
        <>
            <header><ScrollProgress /></header>
            {children}
            <footer className = {styles.footer}></footer>
        </>
    );
}