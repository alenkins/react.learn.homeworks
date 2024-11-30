import {useForm} from "./use-form.js";
import {Counter} from "../counter/counter.jsx";
import classNames from "classnames";
import {Title} from "../title/title.jsx";
import styles from "./review-form.module.css";
import {Button} from "../button/button.jsx";
import {useAuth} from "../auth-context/use-auth.js";
export const ReviewForm = () => {
    const {form, setName, setText, setRating, resetForm} = useForm();
    const {name, text, rating} = form;
    const {isAuth} = useAuth();
    return(
        isAuth &&
        <div className = {styles.form}>
            <Title className={styles.title} tagName = "h4">Оставить отзыв</Title>
            <form>
                <div className = {styles.row}>
                    <span className = {styles.label}>Ваше имя</span>
                    <input
                        className = {styles.field}
                        type = "text"
                        value = {name}
                        onChange = {event => setName(event.target.value)}
                    />
                </div>
                <div className = {styles.row}>
                    <span className = {styles.label}>Отзыв</span>
                    <textarea
                        className = {styles.field}
                        onChange = {event => setText(event.target.value)}
                        value = {text}
                    />
                </div>
                <div className = {styles.row}>
                    <span className = {styles.label}>Рейтинг</span>
                    <Counter min = {1} max = {5} value = {rating} plusClickHandler = {setRating} minusClickHandler = {setRating} />
                </div>
                <div className = {classNames(styles.buttons, styles.row)}>
                    <Button type="button" className = {styles.button}>Опубликовать</Button>
                    <Button type="button" className = {styles.button} onClick = {resetForm}>Сбросить форму</Button>
                </div>
            </form>
        </div>
    );
}