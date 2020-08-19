import React, { Component } from 'react'
import ProducComponents from './ProducComponents'

export default class ProductListComponents extends Component {
    render() {
        return (
            <div>
                <h1 className=" text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <ProducComponents />
                    <ProducComponents />
                    <ProducComponents />
                    <ProducComponents />
                </div>
            </div>

        )
    }
}
