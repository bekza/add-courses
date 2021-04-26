import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { setCourse, removeCourse } from "./redux/actions/courses.action";

const App = ({ courses, setCourse, removeCourse }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleOnSubmit = (course) => {
    course.preventDefault();
    const generateCourse = {
      id: inputValue,
      name: inputValue,
    };

    setCourse(generateCourse);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>Add Courses:</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {`${course.name} `}
            <Icon
              name="remove circle"
              size="small"
              onClick={() => removeCourse(course)}
            />
          </li>
        ))}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    setCourse: (course) => dispatch(setCourse(course)),
    removeCourse: (course) => dispatch(removeCourse(course)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(App);
