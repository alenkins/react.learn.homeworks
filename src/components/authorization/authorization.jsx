import {Button} from "../button/button.jsx";
import {useAuth} from "../auth-context/use-auth.js";
import styles from "./authorization.module.css";

export const Authorization = () => {
    const {auth, toggleAuth} = useAuth();
    return auth.isAuth
        ? <><Button onClick = {() => toggleAuth()} className = {styles.button}>Выйти</Button><div>Привет, {auth.name} </div></>
        : <><Button onClick = {() => toggleAuth()} className={styles.button}>Войти</Button><div>Вы не авторизованы </div></>;
}