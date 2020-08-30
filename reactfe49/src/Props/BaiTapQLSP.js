import React, { Component } from 'react'
import SanPham from './SanPham'

export default class BaiTapQLSP extends Component {
state = {
    sanPhamChiTiet :{ "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },
}
   
    renderSanPham = () => {
// thêm dấu ? sau mảng sản phẩm thì bên app ko truyền giá trị cho nó nó vẫn làm nhưng ko có giá trị
        return this.props.mangSanPham?.map((sanPham, index) => {
            return <div key={index}>
                <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet}/>
            </div>
            

        })
    }
    xemChiTiet = (spClick) =>{
        console.log('spClick',spClick);
        // /setState cho san pham 
        this.setState({
            sanPhamChiTiet : spClick
        })
    }


    render() {
        // cach boc tach thuoc tinh cua doi tuong nhanh trong ES6
        let {maSP,tenSP,hinhAnh,manHinh,cameraSau,cameraTruoc,heDieuHanh,gia,ram,rom} = this.state.sanPhamChiTiet;
        return (<div className="container">
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
        <h3>{tenSP}</h3> 
                        <img style={{width:'100%'}} src={hinhAnh}  alt={hinhAnh}></img></div>
                    <div className="col-8">
                        <h3>Thông số kĩ thuật</h3>
                        <table className = "table">
                            <thead>
                                <tr>
                                    <th>
                                        Màn Hình
                                    </th>
                                    <th>
                                        {manHinh}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        Hệ điều hành
                                    </th>
                                    <th>
                                        {heDieuHanh}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        Camera trước
                                    </th>
                                    <th>
                                    {cameraTruoc}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        Camera sau
                                    </th>
                                    <th>
                                        {cameraSau}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        RAM
                                    </th>
                                    <th>
                                        {ram}
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        ROM
                                    </th>
                                    <th>
                                        {rom}
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
