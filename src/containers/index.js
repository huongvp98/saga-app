import React from "react";
import SideBar from "@components/SideBar";
import "./style.scss";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

function Loading() {
  return <div></div>;
}
function NotFound() {
  return <h2>Not found</h2>;
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
    {
      path: ["/pie-chart"],
      component: Loadable({
        loader: () => import("@containers/pie-chart"),
        loading: Loading,
      }),
    },
  ];

  return (
    <div className="container-app">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
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
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default index;
