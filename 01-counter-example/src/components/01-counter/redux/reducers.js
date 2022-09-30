export const reducer = (count = 0, action) => {
  console.log("salam");
  console.log(typeof action.type);
  console.log(action.type);

  switch (action.type) {
    case "increment":
      return (count += 1);
    case "decrement":
      return (count -= 1);
    default:
      return count;
  }
};
