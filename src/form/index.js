/*
 * @Description: 表单
 * @Author: 管铭钊
 * @Date: 2021/5/7
 */
import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'value'
        }
    }

    handleClick() {
        this.setState({ inputValue: null })
    }

    render() {
        const { inputValue } = this.state
        return (
            <div>
                <h1>表单</h1>
                <h2>受控组件空值</h2>
                <input type="text" value={inputValue}/>
                <button onClick={this.handleClick.bind(this)}>Change Value</button>
            </div>
        )
    }
}

export default Form
