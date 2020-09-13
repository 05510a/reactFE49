import React, { Component } from 'react'
import { connect } from 'react-redux'
import swal from 'sweetalert2'
import {themSinhVienAction} from '../redux/actions/QuanLiSinhVienActions'
class FormSinhVien extends Component {

    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },

        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }

    }
    handleChangeInput = (event) => { // event: là sự kiện trên control gọi hàm này thì onChange'
        // let value = event.target.value;
        // let name = event.target.name
        let { value, name } = event.target;
        let type = event.target.getAttribute('type_') // lấy ra 1 thuộc tính trên thẻ do ta tự định nghĩa
        let newValues = { ...this.state.values };

        newValues = {
            ...newValues,
            [name]: value
        }
        let newErrors = { ...this.state.errors, [name]: value.trim() === '' ? `${name} không được bỏ trống!` : '' }

        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (type === 'email') {
            if (!regexEmail.test(value)) {
                newErrors[name] = 'Email không hợp lệ'
            }
        }


        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        });

    }
    handleSummit = (event) => {
        event.preventDefault(); // chặn sự kiện submit của trình duyệt 

        // validation

        let valid = true;
        // nếu value = rỗng || lỗi khác rỗng thì không hợp lệ
        for (let key in this.state.values) {
            if (this.state.values[key].trim() === '') {
                valid = false;
            }
        }
        for (let key in this.state.errors) {
            if (this.state.errors[key].trim() !== '') {
                valid = false;
            }
        }
        if (!valid) {
            swal.fire(
                'Thất bại?',
                'Dữ liệu không hợp lệ!',
                'error'
            )
            
            return;
        }

        // thêm sinhVien
        // const action = {
        //     type: 'THEM_SINH_VIEN',
        //     sinhVien: this.state.values
        // }
        const action = themSinhVienAction(this.state.values);


        //dùng props.dispath có sẵn khi liên kết với reddux sẽ có props này => dispatch action lên reducer
        this.props.dispatch(action);
        swal.fire(
            'Thành công',
            'Thêm sinh Viên Thành công!',
            'success'
        )
    }
    render() {
        return (
            <form onSubmit={this.handleSummit} className="container-fluid">
                <div className="card text-left">
                    <div className="card-header text-white bg-dark font-weight-bold" >THÔNG TIN SINH VIÊN</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group ">
                                    <p> Mã Sinh viên </p>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput}>

                                    </input>
                                    <p className="text-danger ">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p> Tên Sinh Viên </p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput}>

                                    </input>
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p> email </p>
                                    <input type_="email" className="form-control" name="email" onChange={this.handleChangeInput}>

                                    </input>
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <p> Số điện thoại</p>
                                    <input type_="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput}>

                                    </input>
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12 text-right">
                                <button type="submit" className="btn btn-success">Thêm sinh viên</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}

// cách 2 dùng dispatch xem phần handleSummit
export default connect(null)(FormSinhVien)