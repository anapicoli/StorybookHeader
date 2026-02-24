import "./Header.css";

function Header({ title, user, onLogin, onLogout }) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>

      <div className="header-user">
        {user ? (
          <>
            <span>Olá, {user}</span>
            <button onClick={onLogout}>Sair</button>
          </>
        ) : (
          <button onClick={onLogin}>Entrar</button>
        )}
      </div>
    </header>
  );
}

export default Header;