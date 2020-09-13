import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import {connect} from 'react-redux'
 class DanhSachSinhVien extends Component {

    renderTable = ()=>{
       return this.props.SinhVien.map((sinhVien,index)=>{
        return <tr key={index}>
            <td>{sinhVien.maSinhVien}</td>
            <td>{sinhVien.tenSinhVien}</td>
            <td>{sinhVien.email}</td>
            <td><button className="btn btn-primary mr-2">Chỉnh sửa </button>
            <button className="btn btn-danger ">Xóa</button>
            </td>
        </tr>
        })
    }
    render() {
        return (
            <div>
                <FormSinhVien/>
                <div className="container-fluid">
                <table className="table ">
                    <thead>
                        <tr>
                            <th >Mã sinh viên</th>
                            <th>Tên Sinh Viên</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.renderTable()}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        SinhVien:state.QuanLiSinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps)(DanhSachSinhVien)
