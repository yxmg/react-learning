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

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Hello World</Link></li>
                <li><Link to='/jsx'>JSX</Link></li>
                <li><Link to='/element-render'>元素渲染</Link></li>
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
