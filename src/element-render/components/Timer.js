/*
 * @Description: 计时器
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: setInterval(() => {
                this.setState({ current: new Date().toLocaleTimeString() })
            }, 1000),
            current: new Date().toLocaleTimeString()
        }
    }

    componentWillUnmount() {
        // 不清除定时器在销毁组件时React控制台会有警告
        clearInterval(this.state.timer)
    }

    render() {
        const { current } = this.state
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {current}.</h2>
            </div>
        )
    }
}

export default Timer
