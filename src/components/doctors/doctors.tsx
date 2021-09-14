import { useEffect, useState } from "react";
import { user_api } from "../../services/random_users_api";
import Header from "../header/header";
import "./doctors.scss";

interface User {
  email: string;

  name: {
    first: string;
    last: string;
  };

  registered: {
    date: string;
    age: number;
  };

  phone: string;

  picture: {
    thumbnail: string;
  };
}

export default function Doctors() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    user_api.get("?results=10").then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  return (
    <main id="content">
      <Header />

      <h2>Doctors</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>
                <div className="avatar">
                  <img
                    src={user.picture.thumbnail}
                    alt={user.name.first}
                    width="30"
                    height="30"
                  />
                  <p>
                    {user.name.first} {user.name.last}
                  </p>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.registered.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
