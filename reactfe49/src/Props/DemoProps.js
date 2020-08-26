import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {

    sinhVien = {
        hoTen:'Nguyễn Văn A',
        hinhAnh:`https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard`,
        lop:'aa'
    }
    render() {
        return (
            <div className="container">
                {/* <ThongTinSinhVien hoTen="Nguyễn văn Tèo" lop="front-End 49"/>
                <ThongTinSinhVien hoTen="Nguyễn Thị Tèo" lop="front-End 49"/>
                <ThongTinSinhVien hoTen="Nguyễn văn Tủn" lop="front-End 49"/> */}

                <ThongTinSinhVien sinhVien={this.sinhVien}/>
            </div>
        )
    }
}
