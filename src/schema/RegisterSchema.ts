import { z } from 'zod'

export const RegisterSchema = z.object({
    taiKhoan: z
        .string()
        .nonempty('Vui lòng nhập tài khoản')
        .min(6, 'Nhập tối thiểu 6 ký tự')
        .max(20, 'Nhập tối đa 20 ký tưự'),
    matKhau: z.string().nonempty('Vui lòng nhập mật khẩu'),
    email: z.string().nonempty('Vui lòng nhập email').email('Email không đúng'),
    soDt: z.string().nonempty('Vui lòng nhập số điện thoại'),
    maNhom: z.string().nonempty('Vui lòng nhập mã nhóm'),
    hoTen: z.string().nonempty('Vui lòng nhập họ tên'),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>