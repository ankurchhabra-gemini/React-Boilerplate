import Home from "../../../pages/Home";
import LogIn from "../../../pages/LogIn";

export const routes = [
  {
    id: "home",
    path: "/pages/home",
    component: <Home />,
  },
  {
    id: "logIn",
    path: "/",
    component: <LogIn />,
  },
];
