import React, { useEffect } from "react";
import { connect } from "react-redux";
import bookAction from "./redux-store/action/book";
function Main(props) {
  const { getUsersRequested, user } = props;
  useEffect(() => {
    getUsersRequested();
  }, [getUsersRequested]);
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
};
export default connect(mapState, mapDispatch)(Main);
