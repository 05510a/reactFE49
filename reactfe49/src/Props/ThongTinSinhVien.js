import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {

    // this.props: là thuộc tính có ẵn của component, Lưu ý: dùng để nhận giá trị từ component cha truyền vào, và không thay đổi được giá trị đó
    // binding dữ liệu ra giao diện
    // nhận dữ liệu từ cha truyền xuống con
    render() {
        return (
            <div>
                {/* vd 1
                {/* <p>Ho Ten:{this.props.hoTen}</p>
        <p>Lop:{this.props.lop}</p> */}
        {/* vd2 */}
        {/* <p>Ho Ten:{this.props.sinhVien.hoTen}</p>
        <p>Lop:{this.props.sinhVien.lop}</p> */} */}
   
            </div>
        )
    }
}
