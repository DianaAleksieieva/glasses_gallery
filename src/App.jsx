import css from './App.module.css';
import GlassesView from "./GlassesView/GlassesView";
import Header from "./Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div className={css.App}>
      <Header/>
      <main>
        <GlassesView />
      </main>
    </div>
  );
}

export default App;
