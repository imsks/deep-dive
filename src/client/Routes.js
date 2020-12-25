import App from './App';
import Homepage from './pages/Homepage';
import StudentRegister from './pages/StudentRegister';

export default [
  {
    path: '/',
    exact: true,
    ...App,
    routes: [
      {
        ...Homepage,
      },
    ],
  },
  {
    path: '/register',
    exact: true,
    ...App,
    routes: [
      {
        ...StudentRegister,
      },
    ],
  },
];
