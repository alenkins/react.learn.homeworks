import {useForm} from "./use-form.js";
import {Counter} from "../counter/counter.jsx";

export const ReviewForm = () => {
    const {form, setName, setText, setRating, resetForm} = useForm();
    const {name, text, rating} = form;
    return(
        <div className="card-section">
            <h4>Оставить отзыв</h4>
            <form>
                <div>
                    <span>Ваше имя</span>
                    <input
                        type = "text"
                        value = {name}
                        onChange = {event => setName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Отзыв</span>
                    <textarea
                        onChange = {event => setText(event.target.value)}
                        value = {text}
                    />
                </div>
                <div>
                    <span>Рейтинг</span>
                    <Counter min = {1} max = {5} value = {rating} plusClickHandler = {setRating} minusClickHandler = {setRating} />
                </div>
                <button type="button" className="button">Опубликовать</button>
                <button type="button" className="alert button" onClick = {resetForm}>Сбросить форму</button>
            </form>
        </div>
    );
}