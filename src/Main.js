import React from "react";
import "antd/dist/antd.css";
import Container from "@containers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouterWithPaths from "@components/RouterWithPaths";
import Login from "@containers/login"
import CreateCustomer from "@containers/create-customer"
import LoginForm from "@components/login-form"
import StepOne from "@components/step1"
function NotFound() {
  return <h2>Not found</h2>;
}
export default function Main(props) {
  const routers = [
    {
      path: ["/login"],
      component: Login,
    },
    {
      path: ["/login2"],
      component: LoginForm,
    },
    {
      path: ["/step1"],
      component: StepOne,
    },
    {
      path: ["/create-customer"],
      component: CreateCustomer,
    },
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
                <RouterWithPaths
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
