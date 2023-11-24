import Home from "../pages/dashboard";
import About from "../pages/about";
import Questions from "../pages/question";
import Panduan from "../pages/panduan";
import Solution from "../pages/output";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/questions",
    component: Questions,
  },
  {
    path: "/panduan",
    component: Panduan,
  },
  {
    path: "/output/:kode_disease",
    component: Solution,
  },
];

export default routes;
