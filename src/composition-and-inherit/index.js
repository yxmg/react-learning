/*
 * @Description: 组合与继承
 * @Author: 管铭钊
 * @Date: 2021/5/16
 */
import React from 'react'
import Include from './components/Include'

class CompositionAndInherit extends React.Component {
    render() {
        return (
            <div>
                <h1>组合与继承</h1>
                <h2>包含关系</h2>
                <Include/>
            </div>
        )
    }
}

export default CompositionAndInherit
