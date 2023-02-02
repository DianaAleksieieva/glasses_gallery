import GlassesView from ".././GlassesView/GlassesView";
import Header from "./Header/Header";
import { useLocation } from 'react-router-dom';

const Layout = () =>  {
  const location = useLocation();
  const name = location.pathname.substring(1).replace(/[^a-zа-яё\s]/gi, ' ')
  const Name = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <>
      <Header/>
      <GlassesView name={Name} />
      </> )}

export default Layout;