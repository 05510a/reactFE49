import React, { Component } from 'react'
import HeaderComponents from './HeaderComponents'
import Carousel from './Carousel'
import ProductListComponents from './ProductListComponents'
import FooterComponents from './FooterComponents'


export default class Btap2 extends Component {
    render() {
        return (
            <div classname="bg-dark">
                <HeaderComponents/>
                <Carousel/>
                <ProductListComponents/>
                <FooterComponents/>
            </div>
            
        )
    }
}
