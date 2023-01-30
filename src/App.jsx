import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Women from './routes/Women';
import Men from './routes/Men';
import Layout from './components/Layout';



function App() {

  return (
    // <div className={css.App}>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Women/>} />
          <Route path="about" element={<Men />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
      // </div>
  );
}

export default App;
