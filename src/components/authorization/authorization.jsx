import {Button} from "../button/button.jsx";
import {useAuth} from "../auth-context/use-auth.js";
import styles from "./authorization.module.css";

export const Authorization = () => {
    const {name, setName, isAuth} = useAuth();
    return isAuth
        ? <><Button onClick = {() => setName()} className = {styles.button}>Выйти</Button><div>Привет, {name} </div></>
        : <><Button onClick = {() => setName("Анна")} className={styles.button}>Войти</Button><div>Вы не авторизованы </div></>;
}