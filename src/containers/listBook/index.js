import React, { useEffect } from "react";
import { connect } from "react-redux";
import bookAction from "@action/book";
import ReactGA from "react-ga";
function Main(props) {
  const {
    getBooksRequested,
    listBook,
    updateBookState,
    createOrEdit,
    error,
  } = props;
  useEffect(() => {
    updateBookState({ page: 1, limit: 10 });
    getBooksRequested();
    if (window.performance) {
      let timeSinceLoadPage = Math.round(window.performance.now());
      ReactGA.timing({
        category: "Listbook",
        variable: "load",
        value: timeSinceLoadPage,
        label: "Books libs",
      });
    }
    if (error) {
      ReactGA.exception({
        description: "An error ocurred",
        // fatal: true,
      });
    }
  }, [getBooksRequested, updateBookState, createOrEdit, error]);
  return (
    <div>
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
    page: state.bookReducer.page,
    limit: state.bookReducer.limit,
    error: state.bookReducer.error,
  };
};
const mapDispatch = {
  getBooksRequested: bookAction.getRequested,
  updateBookState: bookAction.updateState,
};
export default connect(mapState, mapDispatch)(Main);
