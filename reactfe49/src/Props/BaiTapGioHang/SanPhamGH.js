import React, { Component } from 'react'

export default class SanPhamGH extends Component {

     


    render() {
        let {sp} = this.props;
        return (
            <div>
               <div className="card">
                    <img style={{width:300,height:300}} className="card-img-top" src={this.props.sp.hinhAnh} alt="./img/sp_note7.png" />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <p className="card-text">{sp.gia.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={()=>{
                                    this.props.themGioHang(sp)
                                    // this.props có thể bóc tách như sp thêm cái themGioHang vào chỗ let phía trên là được
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
