import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUsersRequested,
  getUsersSucceed,
  getUsersFailed,
} from "./redux-store/action";
// import { fetchUsers } from "./data-access/book-provider";
function Main(props) {
  const { getUsersRequested, user } = props;
  useEffect(() => {
    getUsersRequested();
  }, [getUsersRequested]);
  return <div className="App">{user?.name}</div>;
}
const mapState = (state) => ({
  user: state.user,
});
const mapDispatch = {
  getUsersRequested,
};
export default connect(mapState, mapDispatch)(Main);
