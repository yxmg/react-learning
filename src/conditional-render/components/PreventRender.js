/*
 * @Description:
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */

import React from 'react'

class PreventRender extends React.Component {
    componentDidMount() {
        console.log('didMount')
    }

    componentWillUnmount() {
        console.log('willUnmount')
    }

    render() {
        return null
    }
}

export default PreventRender
