import {configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurants/restaurant-slice.js";
import {reviewSlice} from "./entities/reviews/review-slice.js";
import {dishesSlice} from "./entities/dishes/dishes-slice.js";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
    }
});