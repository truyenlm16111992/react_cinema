import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "services";

export const getMovieDistributorThunk = createAsyncThunk(
    "quanLyRap/getMovieDistributor",
    async (_, { rejectWithValue }) => {
        try {
            const respone = await quanLyRapServices.getMovieDistributor();
            return respone.data.content;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
export const getMovieCinemaThunk = createAsyncThunk(
    "quanLyRap/getMovieCinema",
    async (payload: string, { rejectWithValue }) => {
        try {
            const respone = await quanLyRapServices.getMovieCinema(payload);
            return respone.data.content;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
export const getShowtimesByDistributor = createAsyncThunk(
    "quanLyRap/getShowtimesByDistributor",
    async (payload: string, { rejectWithValue }) => {
        try {
            const respone = await quanLyRapServices.getShowtimesByDistributor(payload);
            return respone.data.content;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);