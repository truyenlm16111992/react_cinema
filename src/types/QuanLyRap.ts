export type MovieDistributor = {
    maHeThongRap: string,
    tenHeThongRap: string,
    biDanh: string,
    logo: string
}
export type MovieCinemaRoom = {
    maRap: number,
    tenRap: string
}
export type MovieCinema = {
    maCumRap: string,
    tenCumRap: string,
    diaChi: string,
    danhSachRap: MovieCinemaRoom[]
}
export type ShowtimesByDistributorItem = {
    maLichChieu: number,
    maRap: string,
    tenRap: string,
    ngayChieuGioChieu: string,
    giaVe: number
}
export type ShowTimesByDistributor = {
    lstCumRap: {
        danhSachPhim: {
            lstLichChieuTheoPhim: ShowtimesByDistributorItem[],
            maPhim: number,
            tenPhim: string,
            hinhAnh: string,
            hot: boolean,
            dangChieu: boolean,
            sapChieu: boolean
        }[],
        maCumRap: string,
        tenCumRap: string,
        hinhAnh: string,
        diaChi: string,
    }[],
    maHeThongRap: string,
    tenHeThongRap: string,
    logo: string,
    mahom: string
}

export type ShowtimesByMovieItem = ShowtimesByDistributorItem & {
    thoiLuong: number
}

export type ShowtimesByMovie = {
    heThongRapChieu: {
        cumRapChieu: {
            lichChieuPhim: ShowtimesByMovieItem[],
            maCumRap:string,
            tenCumRap:string,
            hinhAnh:string,
            diaChi:string
        }[],
    }[],
    maPhim:number,
    tenPhim:string,
    biDanh:string,
    trailer:string,
    hinhAnh:string,
    moTa:string,
    maNhom:string,
    hot:boolean,
    dangChieu:boolean,
    sapChieu:boolean,
    ngayKhoiChieu:string,
    danhGia:number
}