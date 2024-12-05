import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dishes/dishes-slice.js";
import {Dish} from "./dish.jsx";

export const DishContainer = ({dishId}) => {
    const dish = useSelector(state => selectDishById(state, dishId));

    return <Dish dish = {dish} />
}