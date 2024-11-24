import {useEffect, useState} from "react";
import classNames from "classnames";
import styles from "./scroll-progress.module.css";
const calcPosition = () => (document.documentElement.scrollTop * 100) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
export const ScrollProgress = () => {
    const [width, setWidth] = useState(calcPosition);
    const progressStyle = {
        width: width + "%"
    }
    useEffect(() => {
        const scrollHandler = () => setWidth(calcPosition);
        document.addEventListener('scroll', scrollHandler);
        return () => document.removeEventListener("scroll", scrollHandler);
    }, []);

    return(
        <div className = {classNames(styles.wrapper)}>
            <div style = {progressStyle} className = {classNames(styles.progress)}></div>
        </div>
    );
}