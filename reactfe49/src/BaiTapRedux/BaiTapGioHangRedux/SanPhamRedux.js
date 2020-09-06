import React, { Component } from 'react'

import {connect } from 'react-redux'
import BaiTapGioHangRedux from './BaiTapGioHangRedux';

 class SanPhamRedux extends Component {



    render() {

        let {sanPham}  = this.props ;

         return (
            <div className="card text-left">
                <img style={{ width: 250 }} className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{this.props.sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                    <button onClick={()=>{
                        this.props.themGioHang(sanPham);
                    }} className="btn btn-success"> Thêm sản phẩm </button>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps=(dispatch) =>{
    //disPath là hàm giống setstae
    return {
        themGioHang:(sanPhamClick) =>{
            console.log('sanPhamClick',sanPhamClick)
            const action ={
                type:'THEM_GIO_HANG',//đây là thuộc tính bắt buộc
                sanPham:sanPhamClick // nội dung đưa lên store của redux
            }
            //dùng dispatch gửi lên redux'
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProps)(SanPhamRedux);