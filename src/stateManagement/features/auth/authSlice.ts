import {createSlice} from '@reduxjs/toolkit';
import {stateType} from '../../types/stateType';

const initialState: stateType['root']['auth'] = {
  freshInstall: true,
  newUser: true,
  firstUpdate: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFreshInstall: state => {
      state.freshInstall = false;
      return state;
    },
    setNewUser: state => {
      state.newUser = false;
      return state;
    },
    setFirstUpdate: state => {
      state.firstUpdate = false;
      return state;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {setFreshInstall, setNewUser, setFirstUpdate} = authSlice.actions;

export const selectFreshInstall = (state: stateType) =>
  state.root.auth.freshInstall;

export const selectNewUser = (state: stateType) => state.root.auth.newUser;
export const selectFirstUpdate = (state: stateType) =>
  state.root.auth.firstUpdate;
