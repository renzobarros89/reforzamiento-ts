import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    reqResApi
      .get<ReqResListado>("/users")
      .then((res) => {
        setUsuarios(res.data.data);
      })
      .catch(console.log);
  }, []);

  const renderItem = (usuario: Usuario) => {
    const { id, avatar, first_name, last_name, email } = usuario;
    return (
      <tr key={id}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: "35px",
              borderRadius: "100px",
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return renderItem(usuario);
          })}
        </tbody>
      </table>

      <button className="btn btn-primary">Siguiente</button>
    </>
  );
};
