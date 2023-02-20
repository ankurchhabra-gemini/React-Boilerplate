import About from '../../pages/About';
import Chart from '../../pages/Chart';
import DataSharing from '../../pages/DataSharing';
import Details from '../../pages/Details';
import ErrorHandling from '../../pages/ErrorHandling';
import Forms from '../../pages/Forms';
import Home from '../../pages/Home';
import Loader from '../../pages/Loader';
import LogIn from '../../pages/LogIn';
import Pipe from '../../pages/Pipe';

const routes = [
  {
    id: 'home',
    path: '/pages/home',
    component: <Home />,
  },
  {
    id: 'logIn',
    path: '/',
    component: <LogIn />,
  },
  {
    id: 'employeeDetails',
    component: <Details />,
    path: '/pages/employee-details',
  },
  {
    id: 'chart',
    component: <Chart />,
    path: '/pages/chart',
  },
  {
    id: 'forms',
    component: <Forms />,
    path: '/pages/forms',
  },
  {
    id: 'loader',
    component: <Loader />,
    path: '/pages/loader',
  },
  {
    id: 'dataSharing',
    component: <DataSharing />,
    path: '/pages/dataSharing',
  },
  {
    id: 'errorHandling',
    component: <ErrorHandling />,
    path: '/pages/error',
  },
  {
    id: 'pipe',
    component: <Pipe />,
    path: '/pages/pipe',
  },
  {
    id: 'about',
    component: <About />,
    path: '/pages/about',
  },
];
export default routes;
