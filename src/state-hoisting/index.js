/*
 * @Description: 状态提升
 * @Author: 管铭钊
 * @Date: 2021/5/7
 */
import React from 'react'
import Thermometer from './components/Thermometer'

class StateHoisting extends React.Component {
    render() {
        return (
            <div>
                <h1>State与生命周期</h1>
                <h2>沸水温度计</h2>
                <Thermometer/>
            </div>
        )
    }
}

export default StateHoisting
