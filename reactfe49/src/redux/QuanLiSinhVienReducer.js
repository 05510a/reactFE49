import {THEM_SINH_VIEN} from './types/QuanLiSinhVienType'


const initialState = {
mangSinhVien :[
    {maSinhVien:1, tenSinhVien:'Nguyen Van A', soDienThoai:1648321312,email:'kamehameha@gmail.com'},
    {maSinhVien:2, tenSinhVien:'Nguyen Van c', soDienThoai:123456789,email:'kameIT@gmail.com'},
]
}
export default (state = initialState,action ) =>{ // dùng export defaut thì bên rootReducer ko cần dùng dấu ngoặc
    switch (action.type){

        case THEM_SINH_VIEN:{
            state.mangSinhVien =[...state.mangSinhVien,action.sinhVien];
            return{...state}
        }
        default:
            return state
    }
}