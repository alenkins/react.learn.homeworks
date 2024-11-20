import {useState} from "react";

export const Counter = ({min, max}) => {
    const [value, setValue] = useState(min);
    const onPlusClickHandler = () => {
        value < max && setValue(value + 1);
    }
    const onMinusClickHandler = () => {
        value > min && setValue(value - 1);
    }
    return(
        <div className="input-group">
            <div className="input-group-button">
                <button className="button" onClick={onPlusClickHandler}>+</button>
            </div>
            <input className="input-group-field" type="number" readOnly={true} value={value}/>
            <div className="input-group-button">
                <button className="button alert" onClick={onMinusClickHandler}>-</button>
            </div>
        </div>
    );
}