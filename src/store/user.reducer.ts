import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EUserRole, UserProfile } from "../types/user";

type UserState = {
  user: UserProfile | null;
};

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<{ role: EUserRole }>) => {
      state.user = { phone: "0337676999", role: actions.payload.role };
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const setUser = userSlice.actions.setUser;
export const removeUser = userSlice.actions.removeUser;
export const userReducer = userSlice.reducer;
