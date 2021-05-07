/*
 * @Description:与运算符 && 和 或运算符 ||
 * @Author: 管铭钊
 * @Date: 2021/5/6
 */
import React from 'react'

class AndOr extends React.Component {
    render() {
        const MailBox = (props) => {
            const { unreadMessage } = props
            return (
                <div>
                    {
                        unreadMessage.length &&
                        <p>You have {unreadMessage.length} unread messages</p>
                    }
                    {
                        unreadMessage.length ||
                        <p>all Read</p>
                    }
                </div>
            )
        }
        const unreadMessage = ['1', '2', '3']
        return <MailBox unreadMessage={unreadMessage}/>
    }
}

export default AndOr
