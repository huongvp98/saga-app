import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import bookAction from "@action/book";
import { Button, Form, Input, Select } from "antd";
import DataConstant from "@constant/data-constant";
import "antd/dist/antd.css";
const { TextArea } = Input;
const { Option } = Select;
function Main(props) {
  const { getBooksRequested, listBook, updateBookState, createOrEdit } = props;
  useEffect(() => {
    updateBookState({ page: 1, limit: 100 });
    getBooksRequested();
  }, [getBooksRequested, updateBookState]);
  const [bookInfor, setBookInfor] = useState({
    name: "",
    description: "",
    author: "",
    avatar: "",
    type: "",
  });
  const updateInfor = (e, action) => {
    switch (action) {
      case "name":
        setBookInfor({ ...bookInfor, name: e.target.value });
        break;
      case "description":
        setBookInfor({ ...bookInfor, description: e.target.value });
        break;
      case "author":
        setBookInfor({ ...bookInfor, author: e.target.value });
        break;
      case "type":
        setBookInfor({ ...bookInfor, type: e });
        break;
      case "avatar":
        setBookInfor({ ...bookInfor, avatar: e.target.value });
        break;
      default:
        break;
    }
  };
  const onSubmit = () => {
    try {
      createOrEdit(bookInfor);
      setBookInfor({
        name: "",
        description: "",
        author: "",
        avatar: "",
        type: "",
      });
    } catch (error) {}
  };
  return (
    <div>
      <div>
        <Form layout="inline">
          <Form.Item label="Tên sách:">
            <Input
              value={bookInfor.name}
              onChange={(e) => updateInfor(e, "name")}
            />
          </Form.Item>
          <Form.Item label="Tác giả">
            <Input
              value={bookInfor.author}
              onChange={(e) => updateInfor(e, "author")}
            />
          </Form.Item>
          <Form.Item label="Link ảnh">
            <Input
              onChange={(e) => updateInfor(e, "avatar")}
              value={bookInfor.avatar}
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <TextArea
              onChange={(e) => updateInfor(e, "description")}
              value={bookInfor.description}
            />
          </Form.Item>
          <Form.Item className="Loại sách" style={{ width: 150 }}>
            <Select
              defaultValue=""
              onChange={(e) => updateInfor(e, "type")}
              value={bookInfor.type}
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
  };
};
const mapDispatch = {
  getBooksRequested: bookAction.getRequested,
  updateBookState: bookAction.updateState,
  createOrEdit: bookAction.createOrEdit,
};
export default connect(mapState, mapDispatch)(Main);
