import {ScrollProgress} from "../scroll-progress/scroll-progress.jsx";
import {Header} from "../header/header.jsx";
import {Container} from "../container/container.jsx";
import styles from "./layout.module.css";

export const Layout = ({children}) => {
    return(
        <>
            <ScrollProgress />
            <Container>
                <Header />
            </Container>
            {children}
            <footer className = {styles.footer} />
        </>
    );
}