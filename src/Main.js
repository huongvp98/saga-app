import React, { useEffect } from "react";
import { connect } from "react-redux";
import bookAction from "@action/book";
function Main(props) {
  const { getBooksRequested, listBook, updateBookState } = props;
  useEffect(() => {
    updateBookState({ page: 1, limit: 10 });
    getBooksRequested();
  }, [getBooksRequested, updateBookState]);
  return (
    <div className="App">
      {listBook.map((item) => {
        return (
          <div key={item.id}>
            {item.name} : {item.author}
          </div>
        );
      })}
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
};
export default connect(mapState, mapDispatch)(Main);
