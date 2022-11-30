import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../consts';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserEmail (state, action: PayloadAction<string | null>) {
      state.userEmail = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userEmail = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {setUserEmail} = userProcess.actions;
