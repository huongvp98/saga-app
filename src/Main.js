import React, { useEffect } from "react";
import { connect } from "react-redux";
import bookAction from "@action/book";
function Main(props) {
  const { getUsersRequested, user, updateState } = props;
  useEffect(() => {
    updateState({ page: 1, limit: 10 });
    getUsersRequested();
  }, [getUsersRequested, updateState]);
  return (
    <div className="App">
      {user.map((item) => {
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
    user: state.bookReducer.user,
  };
};
const mapDispatch = {
  getUsersRequested: bookAction.getUsersRequested,
  updateState: bookAction.updateState,
};
export default connect(mapState, mapDispatch)(Main);
