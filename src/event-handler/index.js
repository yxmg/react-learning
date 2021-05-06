/*
 * @Description: 事件处理
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */
import React from 'react'
import TriggerByBind from './components/TriggerByBind'
import TriggerByClass from './components/TriggerByClass'
import TriggerByArrow from './components/TriggerByArrow'

class EventHandler extends React.Component {
    render() {
        return (
            <div>
                <h1>事件处理</h1>
                <h2>触发器（bind）</h2>
                <TriggerByBind/>
                <hr/>
                <h2>触发器（public class fields）</h2>
                <TriggerByClass/>
                <hr/>
                <h2>触发器（箭头函数）</h2>
                <TriggerByArrow/>
            </div>
        )
    }
}

export default EventHandler
