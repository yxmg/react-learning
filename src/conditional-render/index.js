/*
 * @Description: 条件渲染
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */
import React from 'react'
import Welcome from './components/Welcome'
import AndOr from './components/AndOr'
import ThreeMean from './components/ThreeMean'

class ConditionalRender extends React.Component {
    render() {
        return (
            <div>
                <h1>条件渲染</h1>
                <h2>欢迎界面</h2>
                <Welcome/>
                <hr/>
                <h2>与运算符 && 和 或运算符 ||</h2>
                <AndOr/>
                <hr/>
                <h2>三目运算符</h2>
                <ThreeMean/>
                <hr/>
                <h2>阻止组件渲染</h2>
                <hr/>
            </div>
        )
    }
}

export default ConditionalRender
