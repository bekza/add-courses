const INITIAL_STATE = [
  {
    id: "001",
    name: "Learn React",
  },
  {
    id: "002",
    name: "Learn Redux",
  },
];

export const courses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_COURSE":
      return [...state, { ...action.payload }];
    case "REMOVE_COURSE":
      return [...state.filter((course) => course.id !== action.payload.id)];
    default:
      return state;
  }
};
