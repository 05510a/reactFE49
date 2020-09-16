import {CAP_NHAP_SINH_VIEN, CHINH_SUA_SINH_VIEN, THEM_SINH_VIEN} from './types/QuanLiSinhVienType'


const initialState = {
mangSinhVien :[
    {maSinhVien:1, tenSinhVien:'Nguyen Van A', soDienThoai:1648321312,email:'kamehameha@gmail.com'},
    {maSinhVien:2, tenSinhVien:'Nguyen Van c', soDienThoai:123456789,email:'kameIT@gmail.com'},
],
sinhVienSua:{ // state thông tin sinh viên trên ô input
    maSinhVien:'', tenSinhVien:'', soDienThoai:'',email:''
}
}
export default (state = initialState,action ) =>{ // dùng export defaut thì bên rootReducer ko cần dùng dấu ngoặc
    switch (action.type){

        case THEM_SINH_VIEN:{
            state.mangSinhVien =[...state.mangSinhVien,action.sinhVien];
            return{...state}
        }
        case CHINH_SUA_SINH_VIEN :{
            // Thay đổi state.sinhVienSua= sinhVien khi người dùng click chỉnh sửa
            state.sinhVienSua= action.sinhVien;
            return {...state};
        }
        case CAP_NHAP_SINH_VIEN:{
            let mangSinhVienCapNhat = [...state.mangSinhVien];
            // tìm sinh viên cập nhập sau khi người dùng chỉnh sửa trong mảng dựa vào mã
            let index = mangSinhVienCapNhat.findIndex(sv=>sv.maSinhVien === action.sinhVienCapNhap.maSinhVien);
            if(index !== -1){
                // gán lại sinhVien trong mảng có mã = sinh viên cập nhập
                mangSinhVienCapNhat[index] = [...action.sinhVienCapNhap];
            }
            // cập nhập lại state.mangSinhVien
            state.mangSinhVien  = mangSinhVienCapNhat;
            // trả về state mới
            return {...state}
        }
        default:
            return state
    }
}