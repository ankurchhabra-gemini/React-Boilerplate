import {
  MdBarChart,
  MdDataUsage,
  MdDetails,
  MdError,
  MdHome,
  MdSave,
  MdShare,
  MdTableChart,
  MdTranslate,
} from 'react-icons/md';

export const SideBarData = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    component: 'DashBoard',
    path: '/pages/home',
    icon: <MdHome />,
  },
  {
    id: 'employeeDetails',
    label: 'Details',
    component: 'EmployeeDetails',
    path: '/pages/employee-details',
    icon: <MdTableChart />,
  },
  {
    id: 'chart',
    label: 'Chart',
    component: 'Chart',
    path: '/pages/chart',
    icon: <MdBarChart />,
  },
  {
    id: 'forms',
    label: 'Forms',
    component: 'Forms',
    path: '/pages/forms',
    icon: <MdSave />,
  },
  {
    id: 'loader',
    label: 'Loader',
    component: 'Loader',
    path: '/pages/loader',
    icon: <MdDataUsage />,
  },
  {
    id: 'dataSharing',
    label: 'DataSharing',
    component: 'DataSharing',
    path: '/pages/dataSharing',
    icon: <MdShare />,
  },
  {
    id: 'errorHandling',
    label: 'Error Handling',
    component: 'ErrorHandling',
    path: '/pages/error',
    icon: <MdError />,
  },
  {
    id: 'pipe',
    label: 'Pipe',
    component: 'Pipe',
    path: '/pages/pipe',
    icon: <MdTranslate />,
  },
  {
    id: 'about',
    label: 'About',
    component: 'About',
    path: '/pages/about',
    icon: <MdDetails />,
  },
];

export const pagesData = [10, 20, 30];
