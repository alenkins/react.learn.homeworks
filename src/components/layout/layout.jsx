import {ScrollProgress} from "../scroll-progress/scroll-progress.jsx";
import {ThemeContextProvider} from "../theme-context/theme-context.jsx";
import {AuthContextProvider} from "../auth-context/auth-context.jsx";
import {Header} from "../header/header.jsx";
import {Container} from "../container/container.jsx";
import styles from "./layout.module.css";

export const Layout = ({children}) => {
    return(
        <ThemeContextProvider>
            <AuthContextProvider>
                <ScrollProgress />
                <Container>
                    <Header />
                </Container>
                {children}
                <footer className = {styles.footer} />
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}