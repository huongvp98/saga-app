import { Button, Form, Input } from 'antd';
import React from 'react';
import "./style.scss"
function index(props) {
  return (
    <div className="warp-page">
      <div className="header">
        <img src={require("@components/images/image-login.png")} alt="" />
      </div>
      <div className="body">
        <div className="title-form">
          <span>Đổi mật khẩu</span>
        </div>
        <div className="form-login">
          <Form>
            <Form.Item>
              <Input prefix={<i className="fal fa-user"></i>} placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item>
              <Input prefix={<i className="fal fa-lock-alt"></i>} placeholder="Mật khẩu hiện tại" />
            </Form.Item>
            <Form.Item>
              <Input prefix={<i className="fal fa-lock-alt"></i>} placeholder="Mật khẩu mới" />
            </Form.Item>
            <Form.Item>
              <Input prefix={<i className="fal fa-lock-alt"></i>} placeholder="Xác nhận lại mật khẩu mới" />
            </Form.Item>
            <div className="button-form">
              <div style={{ width: "50%", textAlign: "left" }}>
                <Button >Hủy</Button>
              </div>
              <div style={{ width: "50%", textAlign: "right" }}>
                <Button >Xác nhận</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default index;