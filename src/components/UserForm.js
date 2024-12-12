import { useState, useEffect } from "react"


function UserForm ({onSubmit, selectedUser, clearSelection}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        if(selectedUser){
            setName(selectedUser.name);
            setEmail(selectedUser.email)
        } else {
            setName('');
            setEmail('')
        }
    }, [selectedUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, email});
        setName('');
        setEmail('')
    }


    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h3>{selectedUser ? "Update user" : "Add User"}</h3>

            <input 
                type = "text"
                placeholder="Enter the name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input 
                type = "email"
                placeholder="Enter the email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button type = "submit">{selectedUser ? "update" : "Add"}</button>
            {selectedUser && <button type="button" onClick={clearSelection}>Cancel</button>}
        </form>
    )

}
export default UserForm