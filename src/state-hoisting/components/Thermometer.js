/*
 * @Description: 温度计
 * @Author: 管铭钊
 * @Date: 2021/5/8
 */
import React from 'react'

const BoilingVerdict = (props) => {
    if (props.celsius >= 100 || props.fahrenheit >= 212) {
        return (<p>The water would boil</p>)
    }
    return (<p>The water would not boil</p>)
}

const TemperatureInput = (props) => {
    const temperatureType = {
        c: '摄氏度',
        f: '华氏度'
    }
    return (
        <fieldset>
            <legend>请输入{temperatureType[props.type]}</legend>
            <input type="text" value={props.temperature} onChange={props.onTemperatureChange}/>
            {
                props.type === 'c'
                    ? <BoilingVerdict celsius={props.temperature}/>
                    : <BoilingVerdict fahrenheit={props.temperature}/>
            }
        </fieldset>
    )

}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Thermometer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { temperature: '', type: 'c' }
    }

    handleChange(type, event) {
        const { value } = event.target
        this.setState({ temperature: value, type })
    }

    render() {
        const { temperature, type } = this.state
        const celsius = type === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = type === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

        return (
            <div>
                <TemperatureInput
                    temperature={celsius}
                    type="c"
                    onTemperatureChange={this.handleChange.bind(this, 'c')}
                />
                <TemperatureInput
                    temperature={fahrenheit}
                    type="f"
                    onTemperatureChange={this.handleChange.bind(this, 'f')}
                />
            </div>
        )
    }
}

export default Thermometer
