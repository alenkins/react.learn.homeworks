export const Counter = ({value, plusClickHandler, minusClickHandler, min, max}) => {
    const onPlusClickHandler = () => {
        value < max && plusClickHandler(value + 1);
    }
    const onMinusClickHandler = () => {
        value > min && minusClickHandler(value - 1);
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