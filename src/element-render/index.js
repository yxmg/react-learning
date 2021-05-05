/*
 * @Description: 元素渲染
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
import React from 'react'
import Timer from './components/Timer'

class ElementRender extends React.Component {
    render() {
        return (
            <div>
                <h1>元素渲染</h1>
                <h2>计时器例子</h2>
                <Timer/>
            </div>
        )
    }
}

export default ElementRender
