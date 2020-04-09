import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED_STATUS,
  TOGGLE_EDITING_STATUS,
  EDIT_TODO_TITLE,
  REMOVE_COMPLETED_TODOS,
  TOGGLE_COMPLETED_STATUSES,
} from "./constants";
import initialState from "./initialState";
import reducer from "./";

describe("ActionsTypes", () => {
  const newTodo = {
    value: "new-todo",
    completed: false,
    editing: false,
  };

  it("Should add new todo to state", () => {
    const action = reducer(initialState, {
      type: ADD_TODO,
      newTodo,
    });
    expect(action).toEqual({ todos: [newTodo] });
  });

  it("Should remove first todo from state", () => {
    const action = reducer(
      { todos: [newTodo] },
      {
        type: REMOVE_TODO,
        id: 0,
      }
    );
    expect(action).toEqual(initialState);
  });

  it("Should toggle completed status", () => {
    const action = reducer(
      { todos: [newTodo] },
      {
        type: TOGGLE_COMPLETED_STATUS,
        id: 0,
      }
    );
    expect(action).toEqual({ todos: [{ ...newTodo, completed: true }] });
  });

  it("Should toggle editing status", () => {
    const action = reducer(
      { todos: [newTodo] },
      {
        type: TOGGLE_EDITING_STATUS,
        id: 0,
      }
    );
    expect(action).toEqual({ todos: [{ ...newTodo, editing: true }] });
  });

  it("Should edit todo title", () => {
    const title = "new-title";
    const action = reducer(
      { todos: [newTodo] },
      {
        type: EDIT_TODO_TITLE,
        id: 0,
        title,
      }
    );
    expect(action).toEqual({ todos: [{ ...newTodo, title }] });
  });

  it("Should remove completed todos", () => {
    const todos = [
      newTodo,
      newTodo,
      { ...newTodo, completed: true },
      newTodo,
      { ...newTodo, completed: true },
    ];
    const action = reducer(
      { todos },
      {
        type: REMOVE_COMPLETED_TODOS,
      }
    );
    expect(action.todos.length).toBe(3);
  });

  it("Should toggle completed statuses", () => {
    const todos = [newTodo, newTodo];
    const action = reducer(
      { todos },
      {
        type: TOGGLE_COMPLETED_STATUSES,
        completed: true,
      }
    );
    expect(action).toEqual({
      todos: [
        { ...newTodo, completed: true },
        { ...newTodo, completed: true },
      ],
    });
  });
});
