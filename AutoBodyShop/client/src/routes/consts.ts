import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Consultation from "../pages/consultation/Consultation";
import WorkersRating from "../pages/workersRating/WorkersRating";

export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";
export const CONSULTATION_PATH = "/consultation";
export const WORKERSRATING_PATH = "/workersRating"

export const routes = [
  { path: HOME_PATH, Component: Home },
  { path: LOGIN_PATH, Component: Login },
  { path: REGISTER_PATH, Component: Register },
  { path: CONSULTATION_PATH, Component: Consultation},
  { path: WORKERSRATING_PATH, Component: WorkersRating}
];

export const navBarLinks = [
  { title: "LOGIN", path: LOGIN_PATH},
  { title: "HOME", path: HOME_PATH},
  { title: "CONSULTATION", path: CONSULTATION_PATH},
  { title:"WORKERS RATING", path: WORKERSRATING_PATH}
]
