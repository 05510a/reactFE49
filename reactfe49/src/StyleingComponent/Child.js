import React, { Component } from 'react'
import './Stylling.scss'; // ăn hết toàn bộ code luôn
import style from './Styling.module.scss'; // ăn 1 code có calass name giống thôi
export default class Child extends Component {
    render() {
        return (
            <div>

                <div className={`${style.content}`}>
                    child Component
                    <p className={`${style.text}`}>
                        12345
                    </p>
            </div>

                <p style={{ borderColor: 'red', background: 'yellow', fontSize: '15px', border:'2px solid red' }}>Hello cyber soft FE 49</p>
            </div>
        )
    }
}
