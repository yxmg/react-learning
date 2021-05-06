/*
 * @Description: 触发器（箭头函数）
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */
import React from 'react'

class TriggerByArrow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    handlerClick() {
        this.setState({ status: !this.state.status })
    }

    render() {

        const Trigger = (props) => {
            console.log('render trigger(arrow)')
            return (
                <button onClick={props.onClick}>开/关</button>
            )
        }

        const { status } = this.state
        return (
            <div style={{ backgroundColor: status ? 'yellow' : 'black' }}>
                <Trigger onClick={() => this.handlerClick()}/>
            </div>
        )
    }
}

export default TriggerByArrow
