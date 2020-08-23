import React, { Component } from 'react'

export default class RenderWithState extends Component {


    state ={
        login:false
    }
    // Thuộc tính
    login = false;
    userName = 'kaem'

    renderLogin = () => {
        if (this.state.login) {
            return <p>
                hello {this.userName}
            </p>
        }
        return <div>
            <button className="btn btn-success" onClick={() =>{
                this.handleLogin();}}> Đăng Nhập</button>
        </div>
    }
    handleLogin = () => {
        // this.state.login = true; // không được gắn state trực tiếp

        // Phuowngt hức setstate
        // làm thay đổi giá trị của state
        // Gọi lại hàm render chạy lại
        // SetState là phương thức bất đồng bộ (nó đang làm nhưng những cái tiếp theo vẫn tiếp tục làm)

        // dùng this.render nó không gọi lại nên phải dùng setSate
        let newState = {login:true};
        this.setState(newState,()=>{
            console.log(this.state.login);
        });
        
    }

    render() {
        return (
            <div>
                {/* {this.login ? <p>Hello {this.userName}</p> : <div><button className="btn btn-success">Đăng Nhập</button></div>} */}
                {this.renderLogin()}
            </div>
        )
    }
}
