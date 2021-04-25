import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Icon } from "semantic-ui-react";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [courses, setCourses] = React.useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCourses([
      ...courses,
      {
        key: inputValue,
        value: inputValue,
        disable: false,
      },
    ]);
    setInputValue("");
  };

  const handleRemoveCourse = (courseToDelete) => {
    return setCourses(
      courses.filter((course) => course.key !== courseToDelete.key)
    );
  };

  return (
    <div className="App">
      <h1>Add Courses:</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.key}>
            {`${course.value} `}
            <Icon
              name="remove circle"
              size="small"
              onClick={() => handleRemoveCourse(course)}
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

export default App;
