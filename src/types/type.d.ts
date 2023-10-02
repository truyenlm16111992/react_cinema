// Trong file d.ts chỉ được sử dụng tử khóa declare để khai báo kiểu dữ liệu
// Các kiểu dữ liệu được khai báo bằng declare sẽ không cần import khi sử dụng, IDE sẽ tự tìm để sử dụng
declare type ApiResponse <T> = {
    statusCode: number,
    message: string,
    content: T
}