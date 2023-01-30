import css from './Header.module.css';
import logo from "../logo.svg";
import MenuButton from ".././MenuButton/MenuButton";

const Header = () => {
    
    return (<header className={css.AppHeader}>
        <MenuButton />
        <img src={logo} className={css.AppLogo} alt="logo" />
      </header>)
}
export default Header