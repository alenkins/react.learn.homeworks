import {Star} from "../star/star.jsx";
export const Stars = ({value, count = 5}) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(<Star key = {i} value = {value} number = {i} />);
    }
    return stars;
}