import React from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { connect } from "react-redux";
import userEvent from "@testing-library/user-event";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class Home extends React.Component {
  handleDeleteUser(user) {
    console.log(">>> check delete", user);
    this.props.deleteUserRedux(user);
  }

  render() {
    console.log(">>> check props", this.props.dataRedux);
    let ListUser = this.props.dataRedux;
    return (
      <>
        <div>Hello world from Homepage with Error</div>
        <div>
          {ListUser &&
            ListUser.length > 0 &&
            ListUser.map((item, index) => {
              return (
                <div>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
