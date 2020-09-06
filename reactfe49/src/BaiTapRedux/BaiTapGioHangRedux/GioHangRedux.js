import React, { Component } from 'react'
import {connect } from 'react-redux' 
class GioHangRedux extends Component {

    renderGioHang = () =>{
            return this.props.gioHang.map((spGioHang,index)=>{
                return <tr key={index}>
                        <td>{spGioHang.maSP}</td>
                        <td><img src={spGioHang.hinhAnh} width={50}></img></td>
            <td>{spGioHang.tenSP}</td>
            <td>{spGioHang.gia} </td>
                        <td><button onClick={()=>{
                            this.props.tangGiamSoLuong(spGioHang.maSP,true)
                        }}>+</button>
                            {spGioHang.soLuong} 
                            <button onClick={()=>{
                            this.props.tangGiamSoLuong(spGioHang.maSP,false)
                        }}>-</button>
                            </td>
                        <td>{spGioHang.gia * spGioHang.soLuong} </td>
                        <td><button onClick={()=>{
                            this.props.xoaGioHang(spGioHang.maSP)
                        }} className="btn btn-danger">Xóa</button></td>
                </tr>
            })
    }
    render() {
        return (
            <div>
                    <h3>Giỏ Hàng</h3>
                    <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Mã</th>
                                                <th>Hình ảnh</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Đơn gía</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.renderGioHang()}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                            <td>Tổng tiền</td>
        <td>{this.props.gioHang.reduce((tongTien,spGH,index)=>{
            return tongTien+= spGH.soLuong * spGH.gia},0).toLocaleString()}</td>
                                            </tr>
                                            
                                        </tfoot>
                                    </table>
                                </div>
            </div>
        )
    }
}
// hàm tạo ra 1 props là function đưa dữ liệu lên redux store (reducer)
const mapDispathToProps = (dispatch) =>{
    return {
        xoaGioHang :(maSP) =>{
            //tạo ra action
                const action ={
                    type:'XOA_GIO_HANG',
                    maSP:maSP,
                }
                //gửi dữ liệu lên reducer
                dispatch(action)
        },
        tangGiamSoLuong:(maSP,tangGiam) =>{
            // tạo ra action đưa lên reducer
            const action ={
                    type:'TANG_GIAM_SOLUONG',
                    maSP:maSP,
                    tangGiam:tangGiam,
            }
            dispatch(action) // có thể khỏi tạo action đưa nguyên đống kia vào luôn
        }
    }
}
// Phương thức biến đổi stateRedux => props của component

const mapStateToProps = (state) => {
    // State là rootReducer
    return{
        gioHang: state.GioHangReducer.gioHang
    }
}

export default connect (mapStateToProps,mapDispathToProps)(GioHangRedux)