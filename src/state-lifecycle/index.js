/*
 * @Description: 元素渲染
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
import React from 'react'
import Clock from './components/Clock'
import Increment from './components/Increment'

class StateLifecycle extends React.Component {
    render() {
        return (
            <div>
                <h1>State与生命周期</h1>
                <h2>完整计时器</h2>
                <Clock/>
                <hr/>
                <h2>直接修改State（无效）</h2>
                <Clock tick={function () {
                    this.state.date = new Date()
                }}/>
                <hr/>
                <h2>累加计数器（异步更新，每次变化依赖上一次的值）</h2>
                <Increment/>
                <hr/>
            </div>
        )
    }
}

export default StateLifecycle
