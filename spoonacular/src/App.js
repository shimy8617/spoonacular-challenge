import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/views/Login/Login";
import { Register } from "./components/Register/Register";
import { Menu } from "./components/views/Menu/Menu";
import { Detail } from "./components/views/Detail/Detail";
import { MyList } from "./components/views/MyList/MyList";
import { Error404 } from "./components/views/Error404/Error404";

import "./css/bootstrap.min.css";
import "./App.css";

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("logged")) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export const App = () => (
  <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
      <Route
        path="/menu"
        element={
          //<RequireAuth>
          <Menu />
          //</RequireAuth>
        }
      />
      <Route path="/detail" element={<Detail />} />
      <Route path="/mylist" element={<MyList />} />
    </Routes>
  </>
);
