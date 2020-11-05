import React from 'react';
import { Main } from './styled';
import moment from 'moment';
import 'moment/min/locales';
function Index(props) {
  const getDateVi = () => {
    moment.locale('vi');
    let dateNow = moment();
    return dateNow.format('dddd, Do MMMM YYYY');
  };
  return (
    <Main >
      <div className="header">
        <div className="logo-group">
          <img
            src={require('@components/images/step1/back-ground.png')}
            className="back-ground-img"
            alt=""
          />
          <img
            src={require('@components/images/step1/Logo.png')}
            className="logo"
            alt=""
          />
        </div>
        <div className="time-header">
          <span>{moment().format('hh:ss')}</span>
          <p>{getDateVi()}</p>
        </div>
      </div>
    </Main>
  );
}

export default Index;
