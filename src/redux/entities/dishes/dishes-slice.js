import {createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../../mockups/normalized-mock.js";

const initialState = {
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;
        return acc;
    }, {}),
    ids: normalizedDishes.map(({id}) => id)
}
export const dishesSlice = createSlice({
    name: "Dishes",
    initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id]
    }
});

export const {selectDishById} = dishesSlice.selectors;