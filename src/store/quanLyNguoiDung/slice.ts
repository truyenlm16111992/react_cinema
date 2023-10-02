import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserByAccessToken, UserLogin, UserType } from 'types'
import { getUserByAccessTokenThunk, getUserTypeListThunk, loginThunk } from '.'
import { getAccessToken } from 'utils'

type QuanLyNguoiDungInitialState = {
    accessToken?: string
    userLogin?: UserLogin | UserByAccessToken
    isFetchingLogin?: boolean,
    userTypeList?: UserType[]

}
const initialState: QuanLyNguoiDungInitialState = {
    accessToken: getAccessToken(),
    isFetchingLogin: false,
    userTypeList: []
}

const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {
        logOut: (state, { payload }: PayloadAction<string>) => {
            console.log(payload);
            state.accessToken = undefined;
            state.userLogin = undefined;
            localStorage.removeItem("ACCESSTOKEN");
        },
    },
    extraReducers(builder) {
        //pending hoặc rejected hoawcj fulfilled
        builder
            .addCase(loginThunk.pending, (state) => {
                state.isFetchingLogin = true;
            })
            .addCase(loginThunk.rejected, (state) => {
                state.isFetchingLogin = false;
            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                console.log(payload);
                // Lưu accessToken xuống LocalStorage
                localStorage.setItem('ACCESSTOKEN', payload.accessToken);

                state.accessToken = payload.accessToken;
                //set lại user
                state.userLogin = payload;
                state.isFetchingLogin = false;
            })
            .addCase(getUserByAccessTokenThunk.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
            })
            .addCase(getUserTypeListThunk.fulfilled, (state, { payload }) => {
                state.userTypeList=[...payload];
            })
    },
})

export const { actions: quanLyNguoiDungActions, reducer: quanLyNguoiDungReducer } =
    quanLyNguoiDungSlice
