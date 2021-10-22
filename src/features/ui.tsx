import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserListState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: IUserListState = {
  loading: false,
  error: null,
  success: false,
};

const comments = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    loadingStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    loadingSuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    loadingFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { loadingStart, loadingSuccess, loadingFailure } = comments.actions;
export default comments.reducer;
