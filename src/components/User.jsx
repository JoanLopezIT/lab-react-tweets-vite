
function User(props) {
    console.log(props);
    const {name, handle} = props.userObject
    return (
        <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span>

    )
}

export default User