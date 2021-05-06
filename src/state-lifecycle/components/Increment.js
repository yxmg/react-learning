/*
 * @Description: 累加计数器
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */

import React from 'react'

class Increment extends React.Component {
    constructor(props) {
        super(props)
        this.state = { current: 1, unUpdatedValue: 1, updatedValue: 1 }
    }

    componentDidMount() {

    }

    handleClick() {
        const { current } = this.state
        this.setState({ current: current + 1 }, () => {
            this.setState({ updatedValue: this.state.current })
        })
        this.setState({ unUpdatedValue: this.state.current })
    }

    render() {
        const { current, unUpdatedValue, updatedValue } = this.state
        // 三次更新，只触发两次「render」
        console.log('render!!!')
        return (
            <div>
                <p>It's {current}</p>
                <p>直接获取更新后的值：{unUpdatedValue}</p>
                <p>通过回调获取更新后的值：{updatedValue}</p>
                <p>三次setState，只触发两次render（分开更新current和unUpdatedValue合并触发1次，回调触发1次）</p>
                <button onClick={this.handleClick.bind(this)}>Increment</button>
            </div>
        )
    }
}

export default Increment
