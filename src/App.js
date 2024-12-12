
import './App.css';
import api from './Api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { useEffect, useState } from 'react';

function App() {
  const[users, setUsers] = useState([]);
  const[selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/');
      setUsers(response.data)

    }catch(error){
      console.error("error while fetching the data")
    }
  }


  const addUser = async(user) => {
    try {
      const response = await api.post('/', user);
      setUsers([...users, response.data]);
    }catch(error){
      console.error("error adding the user", error)
    }
  }

  const updateUser = async(user) => {
    try {
      const response = await api.put(`/${selectedUser.id}`, user);
      setUsers(users.map((u) => (u.id === selectedUser.id ? response.data : u)))
      setSelectedUser(null);
    } catch(error){
      console.error("error while updating the user", error)
    }
  }

  const deleteUser = async (id) => {
    try {
      await api.delete(`${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch(error){
      console.log(`error while deletingt the user`, error)
    }
  }

  const handleFormSubmit = (user) => {
    selectedUser ? updateUser(user) : addUser(user)
  }


  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm
        onSubmit = {handleFormSubmit}
        selectedUser = {selectedUser}
        clearSelection={() => setSelectedUser(null)}
      />

      <UserList users = {users} onEdit = {setSelectedUser} onDelete = {deleteUser} />
   

    </div>
  );
}

export default App;

// crud create read update and delete