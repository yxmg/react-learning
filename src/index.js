/*
 * @Description: 入口
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
import React from 'react'
import ReactDOM from 'react-dom'
// 首先我们需要导入一些组件...
import {
    HashRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Home from './hello-world'
import JSX from './JSX'
import ElementRender from './element-render'
import ComponentProps from './component-props'
import StateLifecycle from './state-lifecycle'
import EventHandler from './event-handler'
import ConditionalRender from './conditional-render'
import Form from './form'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Hello World</Link></li>
                <li><Link to='/jsx'>JSX</Link></li>
                <li><Link to='/element-render'>元素渲染</Link></li>
                <li><Link to='/component-props'>组件与Props</Link></li>
                <li><Link to='/state-lifecycle'>State与生命周期</Link></li>
                <li><Link to='/event-handler'>事件处理</Link></li>
                <li><Link to='/conditional-render'>条件渲染</Link></li>
                <li><Link to='/form'>表单</Link></li>
            </ul>
        </nav>
    </header>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/jsx' component={JSX}/>
            <Route path='/element-render' component={ElementRender}/>
            <Route path='/component-props' component={ComponentProps}/>
            <Route path='/state-lifecycle' component={StateLifecycle}/>
            <Route path='/event-handler' component={EventHandler}/>
            <Route path='/conditional-render' component={ConditionalRender}/>
            <Route path='/form' component={Form}/>
        </Switch>
    </main>
)

const App = () => (
    <div>
        <Header/>
        <Main/>
    </div>
)

ReactDOM.render((
    <HashRouter>
        <App/>
    </HashRouter>
), document.getElementById('root'))
