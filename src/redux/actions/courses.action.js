export const setCourse = (course) => {
  return {
    type: "SET_COURSE",
    payload: course,
  };
};

export const removeCourse = (course) => {
  return {
    type: "REMOVE_COURSE",
    payload: course,
  };
};
