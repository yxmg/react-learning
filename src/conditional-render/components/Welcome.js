/*
 * @Description:
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */
import React from 'react'

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedIn: false }
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const { isLoggedIn } = this.state
        const LoginButton = (props) => (<button onClick={props.onClick}>Login</button>)
        const LogoutButton = (props) => (<button onClick={props.onClick}>Logout</button>)
        const button = isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick}/>
            : <LoginButton onClick={this.handleLoginClick}/>

        const UserGreeting = () => (<div>Welcome back, yxmg~</div>)
        const GuestGreeting = () => (<div>Please Sign in or Sign up</div>)
        const Greeting = (props) => {
            if (props.isLoggedIn) {
                return <UserGreeting/>
            } else {
                return <GuestGreeting/>
            }
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

export default Welcome
