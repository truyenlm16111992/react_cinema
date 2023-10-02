import styled from 'styled-components'
import { Input } from "../../ui/Input"
import { Select } from "../../ui/Select"
import { useAuth } from 'hooks'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Button } from 'components'
import { AccountSchema, AccountSchemaType } from 'schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { quanLyNguoiDungServices } from 'services'
import { UserType } from 'types'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { Select as SelectA } from 'antd'


export const AccountInfo = () => {
    const { user } = useAuth();
    const { userTypeList } = useSelector((state: RootState) => state.quanLyNguoiDung);
    const {
        reset,
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<AccountSchemaType>({
        resolver: zodResolver(AccountSchema),
        mode: 'onChange'
    })

    //console.log('user: ', user)
    const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
        console.log('value: ', value)
        // gọi API update tài khoản
    }
    useEffect(() => {
        //reset(user); Do api trả về khi get qua accesstoken là SoDT, nhưng API update lại thông tin thì lại là SoDt nên cần sửa lại
        reset({
            ...user,
            soDt: user?.soDT
        })
    }, [user, reset])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-20 font-600">Thông tin tài khoản</p>
            <InputS
                className=""
                label="Tài khoản"
                name="taiKhoan"
                error={errors?.taiKhoan?.message}
                register={register}
            />
            <InputS
                className=""
                label="Họ và tên"
                name="hoTen"
                error={errors?.hoTen?.message}
                register={register}
            />
            <InputS
                className=""
                label="Email"
                name="email"
                error={errors?.email?.message}
                register={register}
            />
            <InputS
                className=""
                label="Số điện thoại"
                name="soDt"
                error={errors?.soDt?.message}
                register={register}
            />
            <InputS
                className=""
                label="Mã nhóm"
                name="maNhom"
                error={errors?.maNhom?.message}
                register={register}
            />
            {/* <InputS
                className=""
                label="Mã loại người dùng"
                name="maLoaiNguoiDung"
                error={errors?.maLoaiNguoiDung?.message}
                register={register}
            /> */}
            <SelectS
                label='Mã loại người dùng'
                name="maLoaiNguoiDung"
                error={errors?.maLoaiNguoiDung?.message}
                control={control}
                options={userTypeList.map(e => ({ value: e.maLoaiNguoiDung, label: e.tenLoai }))}
                // size='large'
                className='w-full rounded-6'

            />
            {/* <Controller
                control={control}
                name="maLoaiNguoiDung"
                render={({field }) => (
                    <SelectA {...field} defaultValue={field.value}
                    options={userTypeList.map(e=>({value:e.maLoaiNguoiDung,label:e.tenLoai}))}
                    
                    >
                    </SelectA>
                  )}
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
const SelectS = styled(Select)`
    /* .ant-select-selector{
        
        span{
            
        }
    } */
`;
