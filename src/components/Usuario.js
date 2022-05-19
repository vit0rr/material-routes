import {Link} from 'react-router-dom'

function Usuario() {
  return (
    <>
      <h1>Usuário!</h1>
      <p>Página de usuário sendo carregada normalmente!</p>
      <Link to="/">Voltar para Home</Link>
    </>
  );
}

export default Usuario;
