import './Header.css'
import logo from './Adata.svg'; 
const Header = () => {
  return (
    <header className='Header'>
        <h2><img src={logo} alt="..."/></h2>
        <nav>
            <a href="/">Home</a>
            <a href="/">Productos</a>
            <a href="/">About</a>
        </nav>
    </header>
  );
};

export default Header;