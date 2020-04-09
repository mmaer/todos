import { renderHook, act } from "@testing-library/react-hooks";

import initialState from "./initialState";
import reducer from "./";

import { useTodos } from "./actions";

describe("Actions", () => {
  const newTodo = {
    title: "new-todo",
    completed: false,
    editing: false,
  };

  it("Should return initial state", () => {
    const { result } = renderHook(() => useTodos(reducer, initialState));
    expect(initialState).toEqual(result.current.state);
  });

  it("Should add new todo to state", () => {
    const { result } = renderHook(() => useTodos(reducer, initialState));
    act(() => {
      result.current.addTodo(newTodo);
    });

    expect(result.current.state).toEqual({ todos: [newTodo] });
  });

  it("Should remove todo from state", () => {
    const { result } = renderHook(() =>
      useTodos(reducer, { todos: [newTodo] })
    );
    act(() => {
      result.current.removeTodo(0);
    });

    expect(result.current.state).toEqual(initialState);
  });

  it("Should toggle completed status", () => {
    const { result } = renderHook(() =>
      useTodos(reducer, { todos: [newTodo] })
    );
    act(() => {
      result.current.toggleCompletedStatus(0);
    });

    expect(result.current.state).toEqual({
      todos: [{ ...newTodo, completed: true }],
    });
  });

  it("Should toggle editing status", () => {
    const { result } = renderHook(() =>
      useTodos(reducer, { todos: [newTodo] })
    );
    act(() => {
      result.current.toggleEditingStatus(0);
    });

    expect(result.current.state).toEqual({
      todos: [{ ...newTodo, editing: true }],
    });
  });

  it("Should edit todo title", () => {
    const title = "new-title";
    const { result } = renderHook(() =>
      useTodos(reducer, { todos: [newTodo] })
    );
    act(() => {
      result.current.editTodoTitle(0, title);
    });

    expect(result.current.state).toEqual({ todos: [{ ...newTodo, title }] });
  });

  it("Should remove completed todos", () => {
    const todos = [
      newTodo,
      newTodo,
      { ...newTodo, completed: true },
      newTodo,
      { ...newTodo, completed: true },
    ];
    const { result } = renderHook(() => useTodos(reducer, { todos }));
    act(() => {
      result.current.removeCompletedTodos();
    });

    expect(result.current.state.todos.length).toBe(3);
  });

  it("Should toggle completed statuses", () => {
    const todos = [newTodo, newTodo];
    const { result } = renderHook(() => useTodos(reducer, { todos }));
    act(() => {
      result.current.toggleCompletedStatuses(true);
    });

    expect(result.current.state).toEqual({
      todos: [
        { ...newTodo, completed: true },
        { ...newTodo, completed: true },
      ],
    });
  });
});
