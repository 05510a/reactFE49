// Quản lí tất cả state của ứng dụng

import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer'
import {gameXucXacReducer} from './GameXucXacReducer'
import QuanLiSinhVienReducer from './QuanLiSinhVienReducer'

export const rootReducer = combineReducers({
    //Khai báo các state của ứng dụng
    GioHangReducer : GioHangReducer,
    stateGameXucXac : gameXucXacReducer,
    QuanLiSinhVienReducer
})