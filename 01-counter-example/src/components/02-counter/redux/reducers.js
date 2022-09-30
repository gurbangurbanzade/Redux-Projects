export const reducerCount = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return (state += 1);
      break;
    case "decrement":
      return (state -= 1);
      break;
    default:
      return state;
      break;
  }
};
