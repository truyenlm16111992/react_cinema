import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LoginSchema, LoginSchemaType } from 'schema'
import { RootState, useAppDispatch } from 'store'
import { loginThunk } from 'store/quanLyNguoiDung'
import { handleError } from 'utils'

export const LoginTemplate = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(LoginSchema),
    })
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isFetchingLogin} = useSelector((state:RootState)=>state.quanLyNguoiDung);
    const onSubmit: SubmitHandler<LoginSchemaType> = (value) => {
        console.log('value: ', value)
        dispatch(loginThunk(value))
        .unwrap()
        .then(()=>{
            //Xử lý action thành công
            navigate('/');
            toast.success('Đăng nhập thành công!');
        })
        .catch((error)=>{
            //Xử lý action thất bại
            handleError(error);
        });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-600 text-30 text-white">Đăng nhập</h2>
            <Input
                className="mt-16"
                label="Tài khoản"
                placeholder="Tài khoản"
                id="taiKhoan"
                name="taiKhoan"
                error={errors?.taiKhoan?.message}
                register={register}
            />
            <Input
                className="mt-16"
                label="Mật khẩu"
                placeholder="Mật khẩu"
                id="matKhau"
                name="matKhau"
                type='password'
                error={errors?.matKhau?.message}
                register={register}
            />
            <Button className="!w-full !h-[48px] !mt-20" htmlType='submit' type="primary" danger loading={isFetchingLogin}>
                Đăng nhập
            </Button>
        </form>
    )
}
