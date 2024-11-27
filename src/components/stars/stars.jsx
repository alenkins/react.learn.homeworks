import {Star} from "../star/star.jsx";
export const Stars = ({value, count = 5}) => {
    const numbers = [...Array(count).keys()];
    return numbers.map((num) => <Star key = {num} value = {value} number = {num} />);
}