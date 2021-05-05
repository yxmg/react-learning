/*
 * @Description: 展示用户名
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'guan',
    lastName: 'mz'
}

class ShowUsername extends React.Component {
    render() {
        const Greeting = () => user ? <p>Hello, {formatName(user)}!</p> : <p>Hello, Stranger.</p>
        return (
            <div>
                <h2>ShowUsername</h2>
                <Greeting/>
                <hr/>
            </div>
        )
    }
}

export default ShowUsername
