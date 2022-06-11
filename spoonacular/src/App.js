import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/views/Login/Login";
import { Register } from "./components/Register/Register";
import { Menu } from "./components/views/Menu/Menu";
import { Header } from "./components/Header/Header";
import { Detail } from "./components/views/Detail/Detail";
import { MyList } from "./components/views/MyList/MyList";
import { Error404 } from "./components/views/Error404/Error404";

import "./css/bootstrap.min.css";
import "./App.css";

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" replace={true} />;
  }
  return children;
};

export const App = () => {
  const addOrRemoveFromList = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    console.log(imgURL);
    console.log(title);
    console.log(overview);
  };

  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        {/* <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} /> */}
        <Route
          path="/menu"
          render={(props) => (
            <RequireAuth>
              <Menu addOrRemoveFromList={addOrRemoveFromList} {...props} />
            </RequireAuth>
          )}
        />
        <Route path="/detail" element={<Detail />} />
        <Route
          path="/mylist"
          render={(props) => (
            <MyList addOrRemoveFromList={addOrRemoveFromList} {...props} />
          )}
        />
      </Switch>
    </>
  );
};
