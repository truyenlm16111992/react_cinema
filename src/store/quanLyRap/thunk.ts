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