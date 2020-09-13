import {THEM_SINH_VIEN} from '../types/QuanLiSinhVienType'

export const themSinhVienAction = (sinhVien)=>{
    return{
        type: THEM_SINH_VIEN,
        sinhVien
    }
}