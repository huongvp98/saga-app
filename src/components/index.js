import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Header from "@components/header"
import Footer from "@components/footer"
function Loading() {
  return <div></div>;
}
// function NotFound() {
//   return <h2>Not found</h2>;
// }
function index(props) {
  const routers = [
    {
      path: ["/component/step1"],
      component: Loadable({
        loader: () => import("@components/step1"),
        loading: Loading,
      }),
    },
  ];

  return (
    <div className="container-component">
      <Header />
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
        {/* <Route path="*" component={NotFound}/> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default index;
