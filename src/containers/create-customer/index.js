import { Button, Checkbox, DatePicker, Radio, Select } from "antd";
import React from "react";
import "./style.scss";
import dayjs from "dayjs"
function index(props) {
  const data = [
    {
      time: dayjs('2018-04-04T16:00:00'),
      hospital: "Bệnh viện Mắt Trung ương",
      status: 1,
      id: 1,
      new: true,
    },
    {
      time: dayjs('2018-04-04T15:00:00'),
      hospital: "Bệnh viện Mắt Trung ương",
      status: 1,
      id: 2,
    },
    {
      time: dayjs('2018-04-04T8:00:00'),
      hospital: "Bệnh viện Mắt Trung ương",
      status: 0,
      id: 3
    },
  ]

  return (
    <>
      <div className="wrap-page">
        <div className="header-content">
          <div className="inner-header">
            <img
              src={require("./image/logo-1.png")}
              alt=""
              className="logo-ivisitor"
            />
            <img
              src={require("./image/logo-isofh.png")}
              alt=""
              className="logo-isofh"
            />
          </div>
          <div className="menu">
            <ul>
              <li className="active">Check in</li>
              <li>Check out</li>
              <li>Báo cáo</li>
            </ul>
          </div>
          <div className="avata-drop">
            <img src={require("./image/avata.png")} alt="" className="" />
          </div>
        </div>

        <div className="body-page">
          <div className="search-customer">
            <div className="search-inner">
              <div className="text-search">
                <img src={require("./image/search-icon.png")} alt="" />
                <input placeholder="Tìm theo n" />
              </div>
              <div className="qr-search">
                <input placeholder="Quét Mã Barcode Mã khách" />
                <img src={require("./image/QRcode.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="title-register"><span>đăng ký thông tin khách hàng</span></div>
          <div className="warp-form">
            <div className="form-register">
              <div className="row">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="inner-form who">
                        <div className="header-card">
                          <img src={require("@containers/create-customer/image/logo.png")} alt="" />
                          <span>Quý vị là ai?</span>
                        </div>
                        <div className="body-card">
                          <div className="card-item">
                            <Checkbox />
                            <div>
                              <span>Người bệnh</span>
                              <input placeholder="Khoa điều trị" />
                            </div>
                          </div>
                          <div className="card-item">
                            <Checkbox />
                            <div>
                              <span>Người nhà người bệnh</span>
                              <input placeholder="Mã người bệnh" />
                            </div>
                          </div>
                          <div className="card-item">
                            <Checkbox />
                            <div>
                              <span>Khách</span>
                              <input placeholder="Bộ phận liên hệ" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-6">
                      <div className="inner-form general-infor">
                        <div className="header-card">
                          <img src={require("@containers/create-customer/image/logo.png")} alt="" />
                          <span>Thông tin chung</span>
                        </div>
                        <div className="body-card">
                          <div className="card-item">
                            <div>
                              <span>Ngày đăng ký</span>
                              <DatePicker />
                            </div>
                          </div>
                          <div className="card-item">
                            <div>
                              <span>Trạng thái</span>
                              <Select />
                            </div>
                          </div>
                          <div className="card-item">
                            <div>
                              <span>Phân loại*</span>
                              <Radio.Group>
                                <Radio>Bình thường</Radio>
                                <Radio>Bất thường</Radio>
                              </Radio.Group>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="avatar">
                    <img src={require("@containers/create-customer/image/take-picture.png")} alt="" />
                    <span>HÌNH CỦA BẠN</span>
                    <Button type="primary" danger>Chụp hình</Button>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="inner-form general-infor">
                        <div className="header-card">
                          <img src={require("@containers/create-customer/image/logo.png")} alt="" />
                          <span>Thông tin cá nhân</span>
                        </div>
                        <div className="body-card">
                          <div className="card-item">
                            <div>
                              <span>Họ và Tên</span>
                              <input placeholder="Nhập họ và tên" className="input-inner" />
                            </div>
                          </div>
                          <div className="card-item">
                            <div>
                              <span>Số CMT/CCCD/Hộ Chiếu</span>
                              <input placeholder="Nhập số CMT/CCCD/Hộ Chiếu" className="input-inner" />
                            </div>
                          </div>
                          <div className="card-item">
                            <div>
                              <span>Ngày sinh</span>
                              <DatePicker placeholder="Chọn ngày sinh" />
                            </div>
                          </div>
                          <div className="card-item" style={{ display: "flex" }}>
                            <div style={{ width: "50%" }}>
                              <span>Giới tính</span>
                              <Radio.Group>
                                <Radio>Nam</Radio>
                                <Radio>Nữ</Radio>
                              </Radio.Group>
                            </div>
                            <div style={{ width: "50%" }}>
                              <span>Nghề nghiệp</span>
                              <Select></Select>
                            </div>
                          </div>
                          <div className="card-item" style={{ display: "flex" }}>
                            <div style={{ width: "50%", paddingRight: 6 }}>
                              <span>Quốc tịch</span>
                              <Select></Select>
                            </div>
                            <div style={{ width: "50%", paddingLeft: 6 }}>
                              <span>Tên người bảo hộ</span>
                              <input placeholder="Tên người bảo hộ" className="input-inner" />
                            </div>
                          </div>
                          <div className="card-item">
                            <div>
                              <span>Số điện thoại</span>
                              <input placeholder="Nhập số điện thoại" className="input-inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="inner-form general-infor" style={{ background: "none", boxShadow: "none", paddingTop: 0, height: "auto" }}>
                        <div className="inner-form">
                          <div className="header-card">
                            <img src={require("@containers/create-customer/image/logo.png")} alt="" />
                            <span>Địa chỉ tại Việt Nam</span>
                          </div>
                          <div className="body-card">
                            <div className="card-item">
                              <div>
                                <span>Tỉnh/Thành phố</span>
                                <Select></Select>
                              </div>
                            </div>
                            <div className="card-item">
                              <div>
                                <span>Quận/Huyện</span>
                                <Select></Select>
                              </div>
                            </div>
                            <div className="card-item">
                              <div>
                                <span>Xã/Phường</span>
                                <Select></Select>
                              </div>
                            </div>
                            <div className="card-item">
                              <div>
                                <span>Số nhà/Đường/Phố</span>
                                <input placeholder="Nhập Số nhà/Đường/Phố" className="input-inner" />
                              </div>
                            </div>
                            <div className="card-item">
                              <div>
                                <span>Mã khách</span>
                                <input placeholder="Nhập mã khách" className="input-inner" alt="" />
                              </div>
                            </div>

                          </div>

                        </div>
                        <Button className="button-custome"><img src={require("@containers/create-customer/image/check-ic.png")} alt="" /> Tiếp theo</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cmt-image avatar">
                    <img src={require("@containers/create-customer/image/take-picture.png")} alt="" />
                    <img src={require("@containers/create-customer/image/take-picture.png")} alt="" />
                    <span>CMT/CCCD</span>
                    <Button type="primary" danger>Chụp hình</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-history">
            <div className="header-card">
              <img src={require("@containers/create-customer/image/logo.png")} alt="" />
              <span>Lịch sử đăng ký</span>
            </div>
            <div className="div-table">
              {data.map(item => {
                return (
                  <div className="table-inner" key={item.id}>
                    <div className={item.new ? "row-element first-row" : "row-element"}>
                      <div className="time tr-element">
                        {item.time.format("HH:mm DD/MM/YYYY")}
                      </div>
                      <div className="hospital tr-element">
                        {item.hospital}
                      </div>
                      <div className="tr-element status">
                        {item.status ?
                          <span>Bình thường</span> : <span style={{ color: "#FF0000" }}>Bất thường</span>
                        }
                        {item.new ?
                          <div className="check-line">
                            <img src={require("@containers/create-customer/image/check-red.png")} alt="" />
                          </div> : null
                        }
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default index;
