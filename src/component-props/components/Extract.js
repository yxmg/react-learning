/*
 * @Description: 提取
 * @Author: 管铭钊
 * @Date: 2021/5/5
 */
const Avatar = (props) => (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
)

const UserInfo = (props) => (
    <div className="UserInfo">
        <Avatar user={props.user}/>
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>
)

function Extract(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {new Date().toLocaleString()}
            </div>
        </div>
    );
}

export default Extract
