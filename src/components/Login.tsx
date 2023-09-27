export const Login = () => {
  return (
    <>
      <h3>Login</h3>

      <div className="alert alert-info">Validando</div>

      <div className="alert alert-danger">No Autenticado</div>

      <div className="alert alert-success">Autenticado</div>

      <div className="btn btn-primary">Login</div>

      <div className="btn btn-danger">LogOut</div>
    </>
  );
};
