import React, { Component } from 'react'

export default class DataBinding extends Component {
    //  Thuoc tinh
    product = {
        id: 1,
        name: "iphone X",
        price: 1000,
    }

    renderCard = () => {
        return <div className="card text-left">
            <img className="card-img-top" src="http://picsum.photos/180/180" alt />
            <div className="card-body">
                <h4 className="card-title">{this.product.name}</h4>
                <p className="card-text">Body</p>
                <p className="card-title">{this.product.price}</p>
            </div>
        </div>

    }

    render() {
        // binding Data 
        let tittle = "hello FE 49";
        let photo = "http://picsum.photos/500/500";
        let photo2 = "./img/logo.jpg";
        // Binding function

        let renderImg = () => {
            return <img src="http://picsum.photos/500/500" />
        }

        return (
            <div>
                <h1 id="tittle">{tittle}</h1>
                <img src={photo2} />
                <img src="./img/logo.jpg" />
                {renderImg()};

                <div>
                    {this.renderCard};
                </div>
                <div className="card text-left">
                    <img className="card-img-top" src="http://picsum.photos/500/500/" alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.product.name} </h4>
                        <p className="card-text">{this.product.price}</p>
                    </div>
                </div>

            </div>
            

        )
    }
}

