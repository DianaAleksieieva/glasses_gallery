import css from './Header.module.css';
import logo from "../logo.svg";
import MenuButton from ".././MenuButton/MenuButton";

import Navbar from '.././MenuButton/Navbar';

const Header = () => {
    
    return (<header className={css.AppHeader}>
        <Navbar />
        <img src={logo} className={css.AppLogo} alt="logo" />
      </header>)
}
export default Header