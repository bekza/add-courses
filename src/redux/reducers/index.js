import { combineReducers } from "redux";
import { courses } from "./courses.reducer";

const rootReducer = combineReducers({
  courses: courses,
});

export default rootReducer;
