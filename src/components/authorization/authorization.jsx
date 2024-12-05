import {Button} from "../button/button.jsx";
import {useAuth} from "../auth-context/use-auth.js";
import styles from "./authorization.module.css";

export const Authorization = () => {
    const {auth, toggleAuth} = useAuth();
    const welcomeText = auth.isAuth ? `Привет, ${auth.name}` : "Вы не авторизованы";
    const authText = auth.isAuth ? "Выйти" : "Войти";
    return (
        <>
            <Button onClick = {() => toggleAuth()} className = {styles.button}>{authText}</Button>
            <div>{welcomeText}</div>
        </>
    );
}