/*
 * @Description: 三目运算符
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */
import React from 'react'

class ThreeMean extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedIn: false }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.toggleStatus(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    toggleStatus() {
        const { isLoggedIn } = this.state
        this.setState({ isLoggedIn: !isLoggedIn })
    }

    render() {
        const { isLoggedIn } = this.state
        return (<div>You are {isLoggedIn ? 'user' : 'guest'}</div>)
    }
}

export default ThreeMean
