export default function counter5(state = 5, action) {
  switch (action.type) {
    case "inc5":
      return state + 5;
    case "dec5":
      return state - 5;
    default:
      return state;
  }
}
