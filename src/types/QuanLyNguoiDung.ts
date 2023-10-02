export type UserLogin = {
    taiKhoan: string
    hoTen: string
    email: string
    soDT: string
    maNhom: string
    maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    accessToken: string
}
//                              Omit<UserLogin, 'accessToken' | 'maNhom'>
//Omit sẽ định nghĩa type mới dựa trên Userlogin nhưng bỏ key accessToken ra
export type UserByAccessToken = Omit<UserLogin, 'accessToken'> & {
    thongTinDatVe?: [],
    loaiNguoiDung: {
        maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    }
}

export type UserType = {
    maLoaiNguoiDung: string,
    tenLoai: string
}