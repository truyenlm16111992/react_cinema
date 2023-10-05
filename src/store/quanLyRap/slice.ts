import { createSlice } from "@reduxjs/toolkit"
import { MovieDistributor } from "types/QuanLyRap"
import { getMovieDistributorThunk } from "."

type quanLyRapInitialState = {
    movieDistributorList: MovieDistributor[]
}
const initialState: quanLyRapInitialState = {
    movieDistributorList: []
}
const quanLyRapSlice = createSlice({
    name: "quanLyRap",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getMovieDistributorThunk.fulfilled, (state, { payload }) => {
            state.movieDistributorList=payload;
        });
    },
});

export const { actions: quanLyRapActions, reducer: quanLyRapReducer } = quanLyRapSlice;