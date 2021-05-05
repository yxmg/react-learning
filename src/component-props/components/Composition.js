/*
 * @Description: 组合
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
import React from 'react'

class Composition extends React.Component {
    render() {
        const Welcome = (props) => <div>Hello, {props.name}</div>
        return (
            <div>
                <Welcome name="Guan"/>
                <Welcome name="Ming"/>
                <Welcome name="Zhao"/>
            </div>
        )
    }
}

export default Composition
