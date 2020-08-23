import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        src:'./img/CarBasic/products/red-car.jpg'
       
    }
    handleChangeColorcar =(imgColor) =>{
            this.setState({
                src: `img/CarBasic/products/${imgColor}-car.jpg`,
            })
        }
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-8">
                    <img style={{width:'100%'}} src={this.state.src}/>
                </div>
                <div className = "col-4">
                    <button className=" mb-4 text-left" onClick= {() => {
                        this.handleChangeColorcar('black');
                    }}>
                    <img style={{width:'30%'}} src="./img/CarBasic/icons/icon-black.jpg"/>
                    <span style={{fontSize:'15px'}} className="ml-3" >Crytal Black</span>
                    </button>
                    <button onClick={()=>{
                        this.handleChangeColorcar('steel');
                        
                    }} className=" mb-4 text-left"><img style={{width:'30%'}} src="./img/CarBasic/icons/icon-steel.jpg"/> <span style={{fontSize:'15px'}} className="ml-3" >Moden Steel</span></button>
                    <button onClick={()=>{
                        this.handleChangeColorcar('silver');
                    }}  className=" mb-4 text-left"><img style={{width:'30%'}} src="./img/CarBasic/icons/icon-silver.jpg"/> <span style={{fontSize:'15px'}} className="ml-3" >Lunar Silver</span></button>
                    <button  onClick={()=>{
                        this.handleChangeColorcar('red');
                    }}
                     className=" mb-4 text-left"><img style={{width:'30%'}} src="./img/CarBasic/icons/icon-red.jpg"/> <span style={{fontSize:'15px'}} className="ml-3" >Ralley Red</span></button>
                </div>
            </div>
            </div>
        )
    }
    change = () =>{
        this.setState({src:'./img/CarBasic/products/red-car.jpg'},()=>{
            console.log(this.state.login);
        });
    }
   
}
