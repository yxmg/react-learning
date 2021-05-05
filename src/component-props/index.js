/*
 * @Description: 组件与Props
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
import React from 'react'
import Composition from "./components/Composition";
import Extract from './components/Extract'

class ComponentProps extends React.Component {
    render() {
        return (
            <div>
                <h1>组件与Props</h1>
                <h2>组合组件</h2>
                <Composition/>
                <hr/>
                <h2>提取组件</h2>
                <Extract
                    text="呵呵"
                    author={
                        {
                            avatarUrl: 'https://avatars.githubusercontent.com/u/29594167?s=60&v=4',
                            name: 'yxmg'
                        }
                    }
                />
                <hr/>
            </div>
        )
    }
}

export default ComponentProps
