import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Footer, ColorDiv } from "./style"
import { ReactComponent as Target } from '@components/images/step1/Location-user.svg';
import { ReactComponent as IcDangky } from '@components/images/step1/File-text.svg';
import { ReactComponent as Services } from '@components/images/step1/User-check.svg';
import { ReactComponent as Payment } from "@components/images/step1/Dollar.svg"
import { ReactComponent as Clinic } from "@components/images/step1/Hexagons.svg"
function Index(props) {
  const { footerActive = {} } = props
  const [keyActive, setKeyActive] = useState(footerActive)
  const history = useHistory()
  const handleClick = (value) => {
    setKeyActive(value)
    history.push(`/step${value.key}`)
  }
  return (
    <Footer>
      <div className="footer-bar">
        <ColorDiv
          background="#B71F35"
          className="footer-item item1"
          onClick={() => handleClick({ key: 1, background: "#B71F35" })}
        >
          <Target className={keyActive.key === 1 ? "active-bar1" : ""} />
          <div>
            <span>Chọn đối tượng</span>
          </div>
        </ColorDiv>

        <ColorDiv
          background="#193D6B"
          className="footer-item item1"
          onClick={() => handleClick({ key: 2, background: "#193D6B" })}
        >
          <IcDangky className={keyActive.key === 2 ? "active-bar" : ""} />
          <div>
            <span>Đăng ký thông tin</span>
          </div>
        </ColorDiv>

        <ColorDiv
          background="#2C9595"
          className="footer-item item1"
          onClick={() => handleClick({ key: 3, background: "#2C9595" })}>
          <Services className={keyActive.key === 3 ? "active-bar" : ""} />
          <div>
            <span>Chọn dịch vụ khám</span>
          </div>
        </ColorDiv>

        <ColorDiv
          background="#5EA661"
          className="footer-item item1"
          onClick={() => handleClick({ key: 4, background: "#5EA661" })}>
          <Payment className={keyActive.key === 4 ? "active-bar" : ""} />
          <div>
            <span>Phương thức thanh toán</span>
          </div>
        </ColorDiv>

        <ColorDiv
          background="#F5A623"
          className="footer-item item1"
          onClick={() => handleClick({ key: 5, background: "#F5A623" })}>
          <Clinic className={keyActive.key === 5 ? "active-bar" : ""} />
          <div>
            <span>Vào phòng khám</span>
          </div>
        </ColorDiv>

      </div>
      <div className="footer-help" style={{ backgroundColor: keyActive.background }}>
        <img
          src={require('@components/images/step1/Alert-circle.png')}
          alt=""
        />
        <span>Khi cần nhân viên hỗ trợ trực tiếp, hãy lấy số thứ tự để được phục vụ tại quầy</span>
        <div className="button-number">
          <span>Lấy số vào quầy</span>
          <img
            src={require('@components/images/step1/Arrow-right-circle.png')}
            alt=""
          />
        </div>
      </div>
    </Footer>
  );
}

export default Index;