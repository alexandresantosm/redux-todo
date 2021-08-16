import { types } from "../../constants";

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    payload: {
      id: Math.floor(Math.random() * 101) + 1, // Returns a random integer from 1 to 100
      name: text,
    },
  };
}
