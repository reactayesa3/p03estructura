import logo from './img/logo.svg';
import './App.css';

function App() {

  const message = 'Hola Mundo!';
  const urlPic = 'https://i.ibb.co/HH9yRts/2.jpg';
  const footer = <footer>
    <p>&copy; 2022 Todos los derechos reservados</p>
  </footer>

  return (
    // Emplearemos JSX
    <div className='container'>
      {/* Los comentarios en JSX también van en interpolación */}
      <h1>{message}</h1>
      <p>Lorem ipsumm</p>
      {/* Los estilos en línea han de introducirse con un objeto */}
      <img src={logo} style={{width: '240px'}} alt="Logotipo de React"/>
      <img src={urlPic} alt="Imagen demo" />
      {footer}
    </div>
  );
}

export default App;
