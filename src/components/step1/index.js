import React, { useState } from 'react';
import { Main, Service, Display } from './styled';
import moment from 'moment';
import 'moment/min/locales';
import { Slider } from 'antd';
import './style.scss';
import Footer from "@components/footer"
function Index(props) {
  const [stepPercent, setStepPercent] = useState(10);
  const getDateVi = () => {
    moment.locale('vi');
    let dateNow = moment();
    return dateNow.format('dddd, Do MMMM YYYY');
  };
  // var step = 10;
  // const getValue = (e) => {
  //   step = e;
  //   setStepString(e.toString() + '%');
  // };
  const [toggle, setToggle] = useState(0)
  console.log(toggle)
  const [goNext, setGoNext] = useState(false)
  const haveSchedule = () => {
    setToggle(1)
    setStepPercent(20)
    setGoNext(true)
  }
  const goBack = () => {
    if (goNext) {
      setStepPercent(10)
      setGoNext(false)
    }
  }
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
      <div className="body">
        <div className="input-slider">
          <Slider
            // defaultValue={goNext ? 20 : 10}
            value={stepPercent}
            tooltipVisible
          // onChange={(e) => getValue(e)}
          ></Slider>
          <div>
            <img
              src={require('@components/images/step1/Alert-circle.png')}
              alt=""
            />
            <span>
              Hãy hoàn thành 100% tiến trình theo các bước dưới đây
            </span>
          </div>
        </div>
        <Display className="services" display={goNext}>
          <Service onClick={haveSchedule} >
            <div className={toggle === 1 ? "active" : "inactive"}>
              <img
                src={require('@components/images/step1/Check-circle.png')}
                alt=""
              />
              <div className="item-content">
                <span className="item-title">Đã có lịch khám</span>
                <div className="item-sub">
                  <span>Đã có lịch đặt khám,</span>
                  <span>bác sỹ hẹn khám lại</span>
                </div>
              </div>
            </div>
          </Service>
          <Service onClick={() => setToggle(2)}>
            <div className={toggle === 2 ? "active" : "inactive"}>
              <img
                src={require('@components/images/step1/Plus-circle.png')}
                alt=""
              />
              <div className="item-content">
                <span className="item-title">Khám mới</span>
                <div className="item-sub">
                  <span>Đăng ký dịch vụ khám mới,</span>
                  <span>chưa có lịch hẹn</span>
                </div>
              </div>
            </div>

          </Service>
        </Display>
        <Display className="services" display={!goNext}>
          <Service onClick={() => setToggle(3)} >
            <div className={toggle === 3 ? "active" : "inactive"}>
              <img
                src={require('@components/images/step1/Check-circle.png')}
                alt=""
              />
              <div className="item-content">
                <span className="item-title">Đã có hồ sơ</span>
                <div className="item-sub">
                  <span>Đã có lịch đặt khám,</span>
                  <span>bác sỹ hẹn khám lại</span>
                </div>
              </div>
            </div>
          </Service>
          <Service onClick={() => setToggle(4)}>
            <div className={toggle === 4 ? "active" : "inactive"}>
              <img
                src={require('@components/images/step1/Plus-circle.png')}
                alt=""
              />
              <div className="item-content">
                <span className="item-title">Chưa có hồ sơ</span>
                <div className="item-sub">
                  <span>Đăng ký dịch vụ khám mới,</span>
                  <span>chưa có lịch hẹn</span>
                </div>
              </div>
            </div>
          </Service>
        </Display>
        <div className="go-back" onClick={goBack}>
          <img src={require("@components/images/step1/Arrow-left-circle.png")} alt="" />
          <span>Quay lại</span>
        </div>
        <Footer footerActive={{ key: 1 }} />
      </div>
    </Main>
  );
}

export default Index;
