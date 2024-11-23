import {useEffect, useState} from "react";
const calcPosition = () => (document.documentElement.scrollTop * 100) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
export const ScrollProgress = () => {
    const [width, setWidth] = useState(calcPosition);
    const wrapperStyle = {
        position: "fixed",
        height: "12px",
        width: "100%",
        top: 0,
        left: 0
    };
    const progressStyle = {
        backgroundColor: "red",
        height: "100%",
        width: width + "%"
    }
    useEffect(() => {
        const scrollHandler = () => setWidth(calcPosition);
        document.addEventListener('scroll', scrollHandler);
        return () => document.removeEventListener("scroll", scrollHandler);
    }, []);

    return(
        <div style = {wrapperStyle}>
            <div style = {progressStyle}></div>
        </div>
    );
}