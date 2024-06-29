import { useState } from "react";
import { useEffect } from "react";
import "./index.css";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="">
      <p className="text-2xl bg-black">Server updated {users.length}</p>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
