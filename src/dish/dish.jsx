import {Counter} from "../counter/counter.jsx";

export const Dish = ({dish}) => {
    return(
        <div className="cell medium-3 small-6">
            {dish.name}
            <Counter min = "0" max = {5} />
        </div>
    );
}