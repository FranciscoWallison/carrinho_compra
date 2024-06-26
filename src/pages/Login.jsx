import { useContext } from "react";
import { Navigate } from "react-router-dom";
// contextHome
import { Context } from "../context/Context";

/*
  TODO::
    Logica de login.
    Logica de cadastrar.
    Logica de endereço.
*/

function Login() {
  const { login, validAuth } = useContext(Context);

  const iniciarLogin = () => {
    const email = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    login(email, senha);
  };

  return (
    <>
      {/* navigation */}
      {validAuth ? <Navigate to="/" /> : <></>}

      {/* div container */}
      <div className="main-login">
        {/* div da parte direita da tela do login */}
        <div className="right-login">
          {/* Card de login */}
          <div className="card-login">
            <h1>LOGIN</h1>
            {/* Local onde o usuario colocará o seu login */}
            <div className="textfield">
              <label htmlFor="usuario">Login</label>
              <input
                id="login"
                type="text"
                name="usuario"
                placeholder="Login"
              />
            </div>
            <div className="textfield">
              <label htmlFor="usuario">Senha</label>
              <input
                id="senha"
                type="password"
                name="Senha"
                placeholder="Senha"
              />
            </div>
            <button className="btn-login" onClick={() => iniciarLogin()}>
              Login
            </button>
          </div>
        </div>
      </div>

      <h1 className="d-none"> {validAuth ? "Logado" : "Fazer Login"}</h1>
    </>
  );
}

export default Login;
