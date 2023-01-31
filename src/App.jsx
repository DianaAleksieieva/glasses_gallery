import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';


function App() {

  return (

       <Routes>
        <Route exact  path="/" element={<Layout name={'Spectacles Women'} />}>
          <Route index path="/spectacles-women" element={<Layout/>} />
          <Route path="/spectacles-men" element={<Layout name={'Spectacles Men'} />} />
          <Route path="/sunglasses-women" element={<Layout name={'Sunglasses Women'} />} />
          <Route path="/sunglasses-men" element={<Layout name={'Sunglasses Men'} />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>

  );
}

export default App;
