/*
 * @Description: 触发器（public class fields）
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */
import React from 'react'

class TriggerByClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    handlerClick = () => {
        this.setState({ status: !this.state.status })
    }

    render() {

        const Trigger = (props) => {
            console.log('render trigger(class)')
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

export default TriggerByClass
