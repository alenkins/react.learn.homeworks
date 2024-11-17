import {Dish} from "../dish/dish.jsx";
export const Menu = ({dishes}) => {
    return(
        <div className="card-section">
            <h3>Меню</h3>
            <div className="grid-x grid-margin-x grid-margin-y">
                {
                    dishes.map((dish, dishIndex) => <Dish key = {'dish-' + dishIndex} dish = {dish} />)
                }
            </div>
        </div>
    );
}