import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
import { getAccessToken, sleep } from "utils";

export const loginThunk = createAsyncThunk(
    // THam số đầu là Name
    'quanLyNguoiDung/login',
    // Tham số đầu tiên của hàm luôn là payload, nếu k dùng thì dùng _ thay thế để k cần khai bao dữ kiễu liệu
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungServices.login(payload);
            // await new Promise(resolve => setTimeout(resolve, 2000));
            await sleep();
            //console.log(data.data.content);
            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
export const getUserByAccessTokenThunk = createAsyncThunk(
    'quanLyNguoiDung/getUserByAccesToken',
    async (_, { rejectWithValue }) => {
        try {
            // Lấy token dưới localStorage
            const token = getAccessToken

            // Nếu user đã đăng nhập => có token
            if (token) {
                const data = await quanLyNguoiDungServices.getUserByAccessToken()
                return data.data.content
            }
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
// Các action Thunk tự tạo ra dựa theo Name được đặt ở trên
// Có các action isPending (Bắt đầu call), fulfilled (Thành công), rejected (Thất bại)