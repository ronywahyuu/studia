import {RouterProvider} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes/router';

function App() {

  return (
    <HelmetProvider>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
}

export default App;
