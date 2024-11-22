import {useState} from "react";
import {Counter} from "../counter/counter.jsx";

export const Dish = ({dish}) => {
    const [value, setValue] = useState(0);
    return(
        <div className="cell medium-3 small-6">
            {dish.name}
            <Counter min = {0} max = {5} plusClickHandler = {setValue} minusClickHandler = {setValue} value = {value} />
        </div>
    );
}