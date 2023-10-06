import { createSlice } from "@reduxjs/toolkit"
import { MovieDistributor } from "types/QuanLyRap"
import { getMovieCinemaThunk, getMovieDistributorThunk } from "."

type quanLyRapInitialState = {
    movieDistributorList: MovieDistributor[],
    
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
        })
        .addCase(getMovieCinemaThunk.fulfilled, (state, {payload})=>{
            state.
        })
    },
});

export const { actions: quanLyRapActions, reducer: quanLyRapReducer } = quanLyRapSlice;