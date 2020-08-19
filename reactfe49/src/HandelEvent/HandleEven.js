import React, { Component } from 'react'

export default class HandleEven extends Component {


    handleClick =()=>{
        alert('Hello 3');
    }
    showInfo =(name)=>{
        alert(`name ${name}`)
    }
    render() {
        return (
            <div className="container">
                {/* cách 1 // để hàm có dấu ngoặc thì nó thực hiện luôn còn không dấu ngoặc thì nó đợi click mới thực hiện */} 
                <button onClick={this.handleClick}> Click me</button>
                <hr/>
                <button onClick={this.showInfo.bind(this,'TMLN')}> Kame me</button>
                {/* // kết quả hàm bind trả về hàm khác chưa đc gọi */}

                {/* // Cách 2 dùng arrow function Ưu tiên để sử lí sự kiện  */}
                    <button onClick ={()=>{
                        alert("kamejoko");
                        // click gọi nhiều hàm thực hiện..
                        this.handleClick();
                        
                    }}>Show Mess</button>
                    <button onClick ={()=>{
                        
                        // Truyền vào hàm có tham số
                        this.showInfo("kamehameha")

                    }}>Show INfo</button>
            </div>
        )
    }
}
