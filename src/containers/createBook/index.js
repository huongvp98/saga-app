import React, { useEffect } from "react";
import { connect } from "react-redux";
import bookAction from "@action/book";
import { Button, Form, Input, Select } from "antd";
import DataConstant from "@constant/data-constant";
import ReactGA from "react-ga";
const { TextArea } = Input;
const { Option } = Select;
function Main(props) {
  const {
    updateBookState,
    createOrEdit,
    name,
    description,
    author,
    avatar,
    type,
  } = props;
  useEffect(() => {
    updateBookState({
      name: "",
      description: "",
      author: "",
      avatar: "",
      type: "",
    });
    if (window.performance) {
      let timeSinceLoadPage = Math.round(window.performance.now());
      ReactGA.timing({
        category: "Create Book",
        variable: "load",
        value: timeSinceLoadPage,
        label: "Create libs",
      });
    }
  }, [updateBookState, createOrEdit]);
  const updateInfor = (e, action) => {
    updateBookState({ [action]: e });
  };
  const onSubmit = (x) => {
    ReactGA.event({
      category: "Create",
      action: `Click create ${x}`,
      label: "button",
    });
    createOrEdit();
  };
  const onShare = () => {
    ReactGA.ga("send", {
      hitType: "social",
      socialNetwork: "Facebook",
      socialAction: "like",
      socialTarget: "/create",
    });
  };
  const getId = () => {
    let id;
    ReactGA.ga(function (tracker) {
      id = tracker.get("clientId");
    });
    return id;
  };
  return (
    <div>
      <Form layout="inline">
        <Form.Item label="Tên sách:">
          <Input
            value={name}
            onChange={(e) => updateInfor(e.target.value, "name")}
          />
        </Form.Item>
        <Form.Item label="Tác giả">
          <Input
            value={author}
            onChange={(e) => updateInfor(e.target.value, "author")}
          />
        </Form.Item>
        <Form.Item label="Link ảnh">
          <Input
            onChange={(e) => updateInfor(e.target.value, "avatar")}
            value={avatar}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea
            onChange={(e) => updateInfor(e.target.value, "description")}
            value={description}
          />
        </Form.Item>
        <Form.Item className="Loại sách" style={{ width: 150 }}>
          <Select
            defaultValue=""
            onChange={(e) => updateInfor(e, "type")}
            value={type}
          >
            <Option value="">Tất cả</Option>
            {DataConstant.listTypeBook.map((item) => {
              return (
                <Option vale={item.id} key={item.id}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Button type="primary" onClick={() => onSubmit(1)}>
          Thêm mới 1
        </Button>
        <Button type="primary" onClick={() => onSubmit(2)}>
          Thêm mới 2
        </Button>
        <ReactGA.OutboundLink
          eventLabel="myLabel"
          to="/home"
          target="_blank"
          trackerNames={["tracker2"]}
        >
          My Link
        </ReactGA.OutboundLink>
        <Button onClick={onShare}>Share</Button>
        <div>clientId: {getId()}</div>
      </Form>
    </div>
  );
}
const mapState = (state) => {
  return {
    name: state.bookReducer.name,
    description: state.bookReducer.description,
    author: state.bookReducer.author,
    avatar: state.bookReducer.avatar,
    type: state.bookReducer.type,
  };
};
const mapDispatch = {
  updateBookState: bookAction.updateState,
  createOrEdit: bookAction.createOrEdit,
};
export default connect(mapState, mapDispatch)(Main);
