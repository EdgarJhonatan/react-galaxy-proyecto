import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserHttp from "../http/userHttp";

const UserList = () => {
   const [users, setUsers] = useState([]);
   const navigate = useNavigate();
   useEffect(() => {
      loadUsers();
   }, []);

   const loadUsers = () => {
      UserHttp.getAll().then((res) => {
         setUsers(res);
      });
   };

   const editUser = (id) => {
      navigate(`/user/edit/${id}`);
   };

   const createUser = () => {
      navigate("/user/create");
   };

   const deleteUser = (id) => {
      // eslint-disable-next-line no-unused-vars, no-restricted-globals
      const procede = confirm("Desar eliminar este usuario");
      if (procede) {
         UserHttp.remove(id).then(() => {
            setUsers((users) => users.filter((user) => user.id !== id));
         });
      }
   };

   return (
      <div>
         <button onClick={createUser}>Nuevo Usuario</button>
         <table>
            <thead>
               <tr>
                  <td>Nombre</td>
                  <td>Email</td>
                  <td>Activo</td>
                  <td>Editar</td>
                  <td>Eliminar</td>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr key={user.id}>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.active ? "Si" : "No"}</td>
                     <td>
                        <button onClick={() => editUser(user.id)}>Editar</button>
                     </td>
                     <td>
                        <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default UserList;
