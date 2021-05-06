/*
 * @Description: 触发器（bind）
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */
import React from 'react'

class TriggerByBind extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick() {
        this.setState({ status: !this.state.status })
    }

    render() {

        const Trigger = (props) => {
            console.log('render trigger(bind)')
            return (
                <button onClick={props.onClick}>开/关</button>
            )
        }

        const { status } = this.state
        return (
            <div style={{ backgroundColor: status ? 'yellow' : 'black' }}>
                <Trigger onClick={this.handlerClick}/>
            </div>
        )
    }
}

export default TriggerByBind
