import styled from 'styled-components'
import { Input } from "../../ui/Input"
import { useAuth } from 'hooks'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { Button } from 'components'
import { AccountSchema, AccountSchemaType } from 'schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from 'store'
import { getUserByAccessTokenThunk } from 'store/quanLyNguoiDung'
import {  handleError } from 'utils'
import { toast } from 'react-toastify'
import { quanLyNguoiDungServices } from 'services'
import { Navigate } from 'react-router-dom'


export const AccountInfo = () => {
    const { accessToken,user } = useAuth();
    // const { userTypeList } = useSelector((state: RootState) => state.quanLyNguoiDung);
    const dispatch = useAppDispatch();
    const {
        reset,
        // control,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<AccountSchemaType>({
        resolver: zodResolver(AccountSchema),
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
        quanLyNguoiDungServices.updateUserInfo(value)
            .then(() => {
                toast.success("Đã cập nhật thành công");
                dispatch(getUserByAccessTokenThunk());
            })
            .catch((error) => {
                handleError(error);
            })
    }
    useEffect(() => {
        //reset(user); Do api trả về khi get qua accesstoken là SoDT, nhưng API update lại thông tin thì lại là SoDt nên cần sửa lại
        reset({
            ...user,
            soDt: user?.soDT
        })
    }, [user, reset])
    if(!accessToken)
        return <Navigate to={"/"}/>
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-20 font-600">Thông tin tài khoản</p>
            <InputS
                label="Tài khoản"
                name="taiKhoan"
                error={errors?.taiKhoan?.message}
                register={register}
                disabled={true}
            />
            <InputS
                name="matKhau"
                type='hidden'
                register={register}
            />
            <InputS
                label="Họ và tên"
                name="hoTen"
                error={errors?.hoTen?.message}
                register={register}
            />
            <InputS
                label="Email"
                name="email"
                error={errors?.email?.message}
                register={register}
            />
            <InputS
                label="Số điện thoại"
                name="soDt"
                error={errors?.soDt?.message}
                register={register}
            />
            <InputS
                label="Mã nhóm"
                name="maNhom"
                register={register}
                disabled={true}
            />
            <InputS
                name="maLoaiNguoiDung"
                type='hidden'
                register={register}
            />
            <InputS
                label="Loại người dùng"
                name="loaiNguoiDung.tenLoai"
                register={register}
                disabled={true}
            />
            {/* <Select
                label='Mã nhóm'
                name="maNhom"
                error={errors?.maNhom?.message}
                control={control}
                options={Array.from({ length: 10 }, (_, index) => ({ value: `GP${index.toString().padStart(2, '0')}`, label: `GP${index.toString().padStart(2, '0')}` }))}
                bordered={false}
                disabled={true}
                className='w-full rounded-6'
            /> */}
            {/* <Select
                label='Mã loại người dùng'
                name="maLoaiNguoiDung"
                error={errors?.maLoaiNguoiDung?.message}
                control={control}
                options={userTypeList.map(e => ({ value: e.maLoaiNguoiDung, label: e.tenLoai }))}
                bordered={false}
                disabled={true}
                className='w-full rounded-6'
            /> */}
            <div className="text-right mt-20">
                <Button htmlType="submit" type="primary" className="!h-[46px]">
                    Hoàn thành chỉnh sửa
                </Button>
            </div>
        </form>
    )
}

const InputS = styled(Input)`
    label {
        color: #111;
    }
    input {
        background: transparent;
        border: 1px solid black;
        color: #111;
    }
`

