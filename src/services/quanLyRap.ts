import { apiInstance } from "constant/apiInstance";
import { MovieDistributor } from "types/QuanLyRap";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_RAP
});
export const quanLyRapServices = {
    getMovieDistributor: (query = "") => api.get<ApiResponse<MovieDistributor[]>>(`/LayThongTinHeThongRap${query}`)
}