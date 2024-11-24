import {useForm} from "./use-form.js";
import {Counter} from "../counter/counter.jsx";
import classNames from "classnames";
import styles from "./review-form.module.css";
export const ReviewForm = () => {
    const {form, setName, setText, setRating, resetForm} = useForm();
    const {name, text, rating} = form;
    return(
        <div className = {classNames(styles.form)}>
            <h4 className = {classNames(styles.title)}>Оставить отзыв</h4>
            <form>
                <div className = {classNames(styles.row)}>
                    <span className = {classNames(styles.label)}>Ваше имя</span>
                    <input
                        className = {classNames(styles.field)}
                        type = "text"
                        value = {name}
                        onChange = {event => setName(event.target.value)}
                    />
                </div>
                <div className = {classNames(styles.row)}>
                    <span className = {classNames(styles.label)}>Отзыв</span>
                    <textarea
                        className = {classNames(styles.field)}
                        onChange = {event => setText(event.target.value)}
                        value = {text}
                    />
                </div>
                <div className = {classNames(styles.row)}>
                    <span className = {classNames(styles.label)}>Рейтинг</span>
                    <Counter min = {1} max = {5} value = {rating} plusClickHandler = {setRating} minusClickHandler = {setRating} />
                </div>
                <div className = {classNames(styles.buttons, styles.row)}>
                    <button type="button" className = {classNames(styles.button)}>Опубликовать</button>
                    <button type="button" className = {classNames(styles.button)} onClick = {resetForm}>Сбросить форму</button>
                </div>
            </form>
        </div>
    );
}