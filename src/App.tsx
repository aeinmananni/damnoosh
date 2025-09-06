import { RouterProvider } from 'react-router';
import router from './router/pageRouter.routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
