import './Users.css'

function Users(props) {
	return (
		<div className='mini-div'>
			<div>
				<div>{props.wallpaper}</div>
				<img className='img' src={props.profilePic} />
				<h1>
					{props.username}
					{props.id}
				</h1>
				<p>About</p>
				<p>{props.userInfo}</p>
				<p>web</p>
				<p>Twitter</p>
			</div>
		</div>
	)
}

export default Users
