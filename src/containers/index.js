import React from "react";
import SideBar from "@components/SideBar";
import "./style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

function Loading() {
  return <div></div>;
}
function index(props) {
  const routers = [
    {
      path: ["/home"],
      component: Loadable({
        loader: () => import("@containers/listBook"),
        loading: Loading,
      }),
    },
    {
      path: ["/create"],
      component: Loadable({
        loader: () => import("@containers/createBook"),
        loading: Loading,
      }),
    },
  ];

  return (
    <div className="container-app">
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          <Switch>
            {routers.map((route, key) => {
              if (route.component) {
                return (
                  <Route
                    path={route.path}
                    exact
                    key={key}
                    render={(props) => {
                      return <route.component {...props} />;
                    }}
                  />
                );
              }
              return null;
            })}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default index;
