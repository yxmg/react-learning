/*
 * @Description: 包含关系
 * @Author: 管铭钊
 * @Date: 2021/5/16
 */
import React from 'react'

function Wrapper(props) {
    return (
        <div className="wrapper" style={{ width: 100, height: 100, border: '1px solid' }}>
            {props.children}
        </div>
    )
}

class Include extends React.Component {
    render() {
        return (
            <Wrapper>Content</Wrapper>
        )
    }
}

export default Include
