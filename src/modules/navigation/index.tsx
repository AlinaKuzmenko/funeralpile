import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants';
import App from '../../App';
import Live from '../../screens/Live';
import Home from '../../screens/Home';
// import Merch from '../../screens/Merch';
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
      // {
      //   path: ROUTES.merch,
      //   element: <Merch />,
      // },
    ],
  },
]);

export default router;
