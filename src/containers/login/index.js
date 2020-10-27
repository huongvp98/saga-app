import { Button } from 'antd';
import React from 'react';
import "./style.scss"
function index(props) {
  return (
    <div className="login-page">
      <Button className="github">Log In with Github</Button>
      <Button className="facebook">Log In with Facebook</Button>
    </div>
  );
}

export default index;