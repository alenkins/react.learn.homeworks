import {createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../../../mockups/normalized-mock.js";

const initialState = {
    entities: normalizedReviews.reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
    }, {}),
    ids: normalizedReviews.map(({id}) => id),
};
export const reviewSlice = createSlice({
    name: "Reviews",
    initialState,
    selectors: {
        selectReviewsIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id]
    }
});

export const {selectReviewsIds, selectReviewById} = reviewSlice.selectors;