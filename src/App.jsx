import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import SpectaclesWomen from './routes/spectacles-women';
import SpectaclesMen from './routes/sunglasses-men';
import SunglassesWomen from './routes/sunglasses-women';
import SunglassesMen from './routes/sunglasses-men';
import Layout from './components/Layout';



function App() {

  return (
    // <div className={css.App}>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SpectaclesWomen/>} />
          <Route path="about" element={<SpectaclesMen />} />
          <Route path="about" element={<SunglassesWomen />} />
          <Route path="about" element={<SunglassesMen/>} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
      // </div>
  );
}

export default App;
