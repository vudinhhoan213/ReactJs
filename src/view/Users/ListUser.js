import axios from "axios";
import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

// HOC để dùng được điều hướng trong Class Component (v7)
const withRouter = (Component) => (props) => {
  return <Component {...props} router={{ navigate: useNavigate() }} />;
};

class ListUser extends React.Component {
  render() {
    return <div>Hello world from list users</div>;
  }
}

export default withRouter(ListUser);
