import {useState} from "react";

export const Counter = ({min, max}) => {
    const valMin = +min;
    const valMax = +max;
    const [value, setValue] = useState(valMin);
    const onPlusClickHandler = () => {
        value < valMax && setValue(value + 1);
    }
    const onMinusClickHandler = () => {
        value > valMin && setValue(value - 1);
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