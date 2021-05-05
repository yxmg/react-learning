/*
 * @Description: 元素渲染
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
import React from 'react'
import Clock from './components/Clock'

class StateLifecycle extends React.Component {
    render() {
        return (
            <div>
                <h1>State与生命周期</h1>
                <h2>完整计时器</h2>
                <Clock/>
            </div>
        )
    }
}

export default StateLifecycle
