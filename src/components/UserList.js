
function UserList ({users, onEdit, onDelete}) {

    return (
        <div className="user-list">
            <h3>User List</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <span>{user.name} - {user.email}</span>
                        <button onClick={() => onEdit(user)}>Edit</button>
                        <button onClick={() => onDelete(user)}>Delete</button>
                    </li>

                ))}
            </ul>
        </div>
    )

}
export default UserList