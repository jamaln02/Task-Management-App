import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    addTask: (state, action) => {
      let user = state.users.map((user) => {
        if (user.id == state.currentUser.id) {
          user.tasks.push(action.payload);
          state.currentUser.tasks = action.payload;
          state.currentUser = user;
        }
        return user;
      });

      user?.tasks?.push(action.payload);
    },
    deleteTask: (state, action) => {
      const user = state.users.some((user) => {
        if (user.id === state.currentUser.id) {
          user.tasks = user.tasks.filter((task) => task.id !== action.payload);
        }
      });
    },

    updateTask: (state, action) => {
      // state.users = state.users.map((task) =>
      //   task.id === action.payload.id ? action.payload : task
      // );
      const user = state.users.some((user) => {
        if (user.id === state.currentUser.id) {
          user.tasks = user.tasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
          );
        }
      });
    },
  },
});

export const {
  addUser,
  setCurrentUser,
  logoutUser,
  addTask,
  deleteTask,
  updateTask,
} = usersSlice.actions;
export const userSlice = usersSlice.reducer;
