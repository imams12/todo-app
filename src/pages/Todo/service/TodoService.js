function TodoService() {
  let todos = [
    {
      id: "1",
      task: "Makan",
      description: "Makan bersama",
      status: true,
    },
  ];

  const create = (todo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todo) {
          todos = [...todos, todo];
          resolve("Sukses tambah todo");
        } else {
          reject("todo tidak boleh kosong");
        }
      }, 1500);
    });
  };

  const getAll = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todos.length > 0) {
          resolve(todos);
        } else {
          reject("todo kosong");
        }
      }, 2000);
    });
  };

  const update = (updateTodo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (updateTodo) {
          todos = todos.map((todo) => {
            if (todo.id === updateTodo.id) {
              resolve("Sukses update todo");
              return { ...updateTodo };
            }
            reject("todo tidak ada");
            return todo;
          });
        }
      }, 2000);
    });
  };

  const deleteTodo = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          todos = todos.filter((todo) => todo.id !== id);
          resolve("Sukses hapus todo");
        } else {
          reject("todo tidak boleh kosong");
        }
      }, 1500);
    });
  };

  return {
    getAll,
    create,
    update,
    deleteTodo,
  };
}

export default TodoService;
