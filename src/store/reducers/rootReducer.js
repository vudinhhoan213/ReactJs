const initState = {
  users: [
    { id: 1, name: "Hoan" },
    { id: 2, name: "Hoanvu" },
    { id: 3, name: "VuDinhHoan" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(">> run into delete user", action);

      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
      break;
    // case "Mangoes":
    // case "Papayas":
    //   console.log("Mangoes and papayas are $2.79 a pound.");
    //   // Expected output: "Mangoes and papayas are $2.79 a pound."
    //   break;
    default:
      return state;
  }
};

export default rootReducer;
