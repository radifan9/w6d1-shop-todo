// import { useContext } from "react";
// import { todoContext } from "../contexts/todo/todoContext";
import { useDispatch, useSelector } from "react-redux";
import Paragraph from "../components/atoms/Paragraph";

// Slice
import {
  addTask,
  toggleTask,
  editTask,
  removeTask,
} from "../redux/slices/todoSlice";

function Todo() {
  return (
    <>
      <div className="grid grid-cols-[1fr_300px]">
        <TodoList />
        <TodoForm />
      </div>
    </>
  );
}

function TodoList() {
  // Redux
  const todoState = useSelector((state) => {
    return state.todo;
  });
  const dispatch = useDispatch();

  return (
    <section className="grid grid-cols-2 gap-2.5 p-5">
      {todoState.todo.length === 0 && (
        <p>Todo masih kosong. Silahkan tambah todo dengan form disamping</p>
      )}
      {todoState.todo.length > 0 &&
        todoState.todo.map((todo, idx) => {
          return (
            <div
              className="relative cursor-pointer border-2 border-solid border-black p-1.25"
              key={idx}
            >
              <Paragraph>
                <span className="text-blue-500">Judul</span>
                {todo.title}
              </Paragraph>

              <div
                onClick={() =>
                  dispatch(
                    toggleTask({
                      title: todo.title,
                    })
                  )
                }
                className="cursor-pointer select-none"
              >
                <p>{todo.isCompleted ? "Selesai" : "Belum Selesai"}</p>

                <form
                  className="flex gap-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const oldTitle = todo.title;
                    const newTitle = e.target.title.value;
                    dispatch(editTask({ oldTitle, newTitle }));
                  }}
                >
                  <input
                    type="text"
                    name="title"
                    id=""
                    placeholder="New title task"
                    className="border-[1px] rounded-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                  <button
                    className="border-[1px] rounded-2xl px-3"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Edit
                  </button>
                </form>
              </div>

              <div
                className="absolute top-0 right-0 cursor-pointer rounded-full bg-gray-300 p-1.25 select-none"
                onClick={() => {
                  // removeTodo(todo.title);
                  dispatch(
                    removeTask({
                      title: todo.title,
                    })
                  );
                }}
              >
                X
              </div>
            </div>
          );
        })}
    </section>
  );
}

function TodoForm() {
  const todoState = useSelector((state) => {
    return state.todo;
  });
  const dispatch = useDispatch();

  return (
    <form
      className="flex flex-col gap-2.5"
      onSubmit={(e) => {
        e.preventDefault();
        // addTodo({ title: e.target.todo.value, isCompleted: false });
        // e.target.todo.value = "";
        dispatch(
          addTask({
            title: e.target.todo.value,
            isCompleted: false,
          })
        );
      }}
    >
      <input
        type="text"
        name="todo"
        placeholder="Judul Todo"
        className="border-2 border-solid border-black p-1.25"
      />
      <button className="cursor-pointer border-2 border-solid border-black p-1.25 select-none">
        Add Todo
      </button>
    </form>
  );
}

export default Todo;
