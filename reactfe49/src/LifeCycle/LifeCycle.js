import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import Header from './Header';

export default class LifeCycle extends Component {
constructor(props){
    super(props);
    console.log('contructor');
    // this.state={
    //     number:1
    // }
    this.state ={
        number:1,
        sinhVien:{
            id:1,
            name :'Kame'}
        // gia tri object
    }
    
}
static getDerivedStateFromProps(newProps,currentState){
    console.log('getDerivedStateFromProps');
    return currentState
}
shouldComponentUpdate(newProps,newState){
    return true;
    // return fasle nos chan ko render duoc
}



    render() {
        console.log('render component cha')
        return (
            <div>
                 <h1>{this.state.sinhVien.name}</h1>
              <button onClick={()=>{
                //   this.setState({
                //       number : this.state.number +1
                //   })
                let sinhVien = {...this.state.sinhVien};// này bắt buộc phải có ... cho object còn dữ liệu cơ bản để  bình thường ok
                sinhVien.name = "Nguyen Van B";
                this.setState({
                    sinhVien:sinhVien
                })
              }}>+</button>
              <h1>{this.state.number}</h1>
              <button onClick={()=>{
                  this.setState({
                      number:this.state.number+1
                  })
              }}>setNumber</button>{this.state.number < 3 ?  <Header sinhVien={this.state.sinhVien}/>:'' }
             
                  <ChildComponent/>
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(propCu,StateCu){
        console.log('componenDiUpdate Cha')
    }
}
