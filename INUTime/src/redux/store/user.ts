// Redux Toolkit 사용
// store에 전역상태 저장.
//모든 상태가 여기 안에 트리구조 저장.
import { createSlice, PayloadAction } from '@reduxjs/toolkit'; //createSlice는 액션 생성자와 리듀서를 한 번에 정의할 수 있게 해줌.
// PayloadAction은 타입스크립트 환경에서 액션의 payload의 타입을 정의하는 데 사용.
import type { RootState } from '../store';
// RootState 전역상태 객체타입. 상태 선택자에서 사용

interface UserState {
  user: {
    id: number; //타입설정
  };
}

const initialState: UserState = {
  user: {}, // 유저 초기화 상태
};

export const userSlice = createSlice({
  //아래있는거 객체 받는 함수
  name: 'search',
  initialState, // 초기상태
  reducers: {
    setUser: (state, { payload }) => {
      //유저상태 업데이트
      state.user = payload; // payload로 유저상태 업데이트
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
