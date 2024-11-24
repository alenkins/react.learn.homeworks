import {Fragment} from "react";
import {ScrollProgress} from "../scroll-progress/scroll-progress.jsx";
import classNames from "classnames";
import styles from "./layout.module.css";
export const Layout = ({children}) => {
    return(
        <Fragment>
            <header><ScrollProgress /></header>
            {children}
            <footer className = {classNames(styles.footer)}></footer>
        </Fragment>
    );
}