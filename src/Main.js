import React, { useEffect } from "react";
import { connect } from "react-redux";
import bookAction from "@action/book";
import { Button, Form, Input, Select } from "antd";
import DataConstant from "@constant/data-constant";
import "antd/dist/antd.css";
const { TextArea } = Input;
const { Option } = Select;
function Main(props) {
  const {
    getBooksRequested,
    listBook,
    updateBookState,
    createOrEdit,
    name,
    description,
    author,
    avatar,
    type,
  } = props;
  useEffect(() => {
    updateBookState({ page: 1, limit: 10 });
    getBooksRequested();
    updateBookState({
      name: "",
      description: "",
      author: "",
      avatar: "",
      type: "",
    });
  }, [getBooksRequested, updateBookState, createOrEdit]);
  const updateInfor = (e, action) => {
    switch (action) {
      case "name":
        updateBookState({ name: e.target.value });
        break;
      case "description":
        updateBookState({ description: e.target.value });
        break;
      case "author":
        updateBookState({ author: e.target.value });
        break;
      case "type":
        updateBookState({ type: e });
        break;
      case "avatar":
        updateBookState({ avatar: e.target.value });
        break;
      default:
        break;
    }
  };
  const onSubmit = () => {
    try {
      createOrEdit();
      // setBookInfor({
      //   name: "",
      //   description: "",
      //   author: "",
      //   avatar: "",
      //   type: "",
      // });
    } catch (error) {}
  };
  return (
    <div>
      <div>
        <Form layout="inline">
          <Form.Item label="Tên sách:">
            <Input value={name} onChange={(e) => updateInfor(e, "name")} />
          </Form.Item>
          <Form.Item label="Tác giả">
            <Input value={author} onChange={(e) => updateInfor(e, "author")} />
          </Form.Item>
          <Form.Item label="Link ảnh">
            <Input onChange={(e) => updateInfor(e, "avatar")} value={avatar} />
          </Form.Item>
          <Form.Item label="Mô tả">
            <TextArea
              onChange={(e) => updateInfor(e, "description")}
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
          <Button type="primary" onClick={onSubmit}>
            Thêm mới
          </Button>
        </Form>
      </div>
      <div className="App">
        {listBook.map((item) => {
          return (
            <div key={item.id}>
              {item.name} : {item.author}
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapState = (state) => {
  return {
    listBook: state.bookReducer.listBook,
    name: state.bookReducer.name,
    description: state.bookReducer.description,
    author: state.bookReducer.author,
    avatar: state.bookReducer.avatar,
    type: state.bookReducer.type,
    page: state.bookReducer.page,
    limit: state.bookReducer.limit,
  };
};
const mapDispatch = {
  getBooksRequested: bookAction.getRequested,
  updateBookState: bookAction.updateState,
  createOrEdit: bookAction.createOrEdit,
};
export default connect(mapState, mapDispatch)(Main);
