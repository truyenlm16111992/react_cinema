import { apiInstance } from "constant/apiInstance";
import { MovieDistributor, MovieCinema, ShowTimesByDistributor } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_RAP
});
export const quanLyRapServices = {
    getMovieDistributor: (query = "") => api.get<ApiResponse<MovieDistributor[]>>(`/LayThongTinHeThongRap${query}`),
    getMovieCinema: (query = '') => api.get<ApiResponse<MovieCinema>>(`/LayThongTinCumRapTheoHeThong${query}`),
    getShowtimesByDistributor: (query = '') => api.get<ApiResponse<ShowTimesByDistributor>>(`/LayThongTinLichChieuHeThongRap${query}`)
}