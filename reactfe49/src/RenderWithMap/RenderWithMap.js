import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    producList = [
        { id: 1, name: 'Iphone X', price: 1000 },
        { id: 2, name: 'Iphone Note 10Plus', price: 1000 },
        { id: 3, name: 'htc m10', price: 2000 }
    ]

    renderProduct = () => {
        // cách 1
        // let content = [];
        // for (let i = 0; i < this.producList.length; i++) {
        //     let product = this.producList[i];
        //     let cardProduct = <div key={i} className="col-4">
        //         <div className="card text-left">
        //             <img className="card-img-top" src="holder.js/100px180/" alt />
        //             <div className="card-body">
        // <h4 className="card-title">{product.name}</h4>
        // <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>;
        //     </div>
        //         content.push(cardProduct);
        // }
        // console.log(content);

        // Cách 2 dùng hàm map 
        let arrJSXProduct = this.producList.map((product, index) => {
            return <div className="col-4 " key={index}><div className="card text-left">
                <img className="card-img-top" src="http://picsum.photos/200/200" alt />
                <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">{product.price}</p>
                </div>
            </div>
            </div>

        })

        return arrJSXProduct;
    }

    render() {
        return (
            <div>
                {this.renderProduct()}
            </div>
        )
    }
}
