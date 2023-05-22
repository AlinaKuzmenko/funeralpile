import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants';
import App from '../../App';
import Live from '../../screens/Live';
import Home from '../../screens/Home';
import Error from '../../screens/Error';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.live,
        element: <Live />,
      },
    ],
  },
]);

export default router;
