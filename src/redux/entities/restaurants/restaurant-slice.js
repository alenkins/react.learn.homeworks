import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../../mockups/normalized-mock.js";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
    }, {}),
    ids: normalizedRestaurants.map(({id}) => id)
};

export const restaurantSlice = createSlice({
    name: "Restaurants",
    initialState,
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id]
    }
});

export const {selectRestaurantsIds, selectRestaurantById} = restaurantSlice.selectors;