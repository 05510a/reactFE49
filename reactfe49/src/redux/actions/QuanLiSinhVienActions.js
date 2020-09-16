import {THEM_SINH_VIEN, CHINH_SUA_SINH_VIEN, CAP_NHAP_SINH_VIEN} from '../types/QuanLiSinhVienType'

export const themSinhVienAction = (sinhVien)=>{
    return{
        type: THEM_SINH_VIEN,
        sinhVien
    }
}
export const chinhSuaSinhVienAction=(sinhVien)=>{
    return{
        type:CHINH_SUA_SINH_VIEN,
        sinhVien
    }
}
// {return noiDung} => (noiDung)
export const capNhapSinhVienAction = (sinhVienCapNhap) => ({
    type: CAP_NHAP_SINH_VIEN,
    sinhVienCapNhap
})
