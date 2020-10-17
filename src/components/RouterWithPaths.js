import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
const RouterWithPaths = ({ path, roles = [], ...rest }) => {
  useEffect(() => {
    ReactGA.initialize("UA-180669779-1", {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: 180669779,
      },
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.addTrackers(
      [
        {
          trackingId: "UA-180669779-1",
          gaOptions: {
            name: "tracker1",
            userId: 180669779,
          },
        },
        {
          trackingId: "UA-180669779-2",
          gaOptions: { name: "tracker2" },
        },
        {
          trackingId: "UA-180669779-3",
          gaOptions: { name: "tracker3" },
        },
      ],
      { debug: true, alwaysSendToDefaultTracker: true }
    );
    // ReactGA.set({ userId: 123 }, ["tracker2"]);
  });
  return (
    <Switch key={rest.key}>
      {typeof path === "string" ? (
        <Route path={path} {...rest} />
      ) : (
        path.map((item, index) => <Route path={item} {...rest} key={index} />)
      )}
    </Switch>
  );
};

export default RouterWithPaths;
