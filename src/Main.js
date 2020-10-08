import React from "react";
import "antd/dist/antd.css";
import Container from "@containers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function NotFound() {
  return <h2>Not found</h2>;
}
export default function Main(props) {
  const routers = [
    {
      path: ["/", "/:function1", "/:function1/:id", "/:function1/:function2"],
      component: Container,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routers.map((route, key) => {
            if (route.component) {
              return (
                <Route
                  key={key}
                  path={route.path}
                  exact
                  render={(props) => {
                    return <route.component {...props} />;
                  }}
                />
              );
            }
            return null;
          })}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
