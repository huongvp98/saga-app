import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";
import {
  GoogleReCaptchaProvider,
  // withGoogleReCaptcha,
  useGoogleReCaptcha,
  // GoogleReCaptcha,
} from "react-google-recaptcha-v3";
ReactGA.initialize("UA-180669779-1");
ReactGA.pageview(window.location.pathname + window.location.search);
// class ReCaptchaComponent extends React.Component {
//   async componentDidMount() {
//     const token = await this.props.googleReCaptchaProps.executeRecaptcha(
//       "homepage"
//     );
//     console.log(token);
//   }

//   render() {
//     return <App />;
//   }
// }
// const YourReCaptchaComponent = withGoogleReCaptcha(ReCaptchaComponent);
//use the hook
const YourReCaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const token = executeRecaptcha("login_page");
  token.then((s) => {
    console.log(s);
  });
  return <App />;
};
ReactDOM.render(
  <GoogleReCaptchaProvider
    reCaptchaKey="6LcPMNcZAAAAAF8DRDGVUqBjLsolM7raJxBONulD"
    language="vi"
    useRecaptchaNet={true}
  >
    <YourReCaptchaComponent />
  </GoogleReCaptchaProvider>,
  document.getElementById("root")
);

//GoogleReCaptcha
// const handleVerify = (e) => {
//   alert(e);
// };
// ReactDOM.render(
//   <GoogleReCaptchaProvider reCaptchaKey="6LcPMNcZAAAAAF8DRDGVUqBjLsolM7raJxBONulD">
//     <GoogleReCaptcha onVerify={handleVerify} />
//   </GoogleReCaptchaProvider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
