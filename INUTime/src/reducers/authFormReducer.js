export const initAuthForm = {
  email: '',
  password: '',
  passwordConfirm: '',
  isLoading: false,
  disabled: true,
};
// 유저 양식
export const AuthFormTypes = {
  UPDATE_FORM: 'UPDATE_FORM',
  TOGGLE_LOADING: 'TOGGLE_LOADING',
  RESET: 'RESET',
};
// action

export const authFormReducer = (state, action) => {
  switch (action.type) {
    case AuthFormTypes.UPDATE_FORM: //payload라는 키로 전달된 상태를 반영하여 반환
      return { ...state, ...action.payload };
    case AuthFormTypes.TOGGLE_LOADING: // 기존 상태변수에서 isLoading만 현재 상태에서 반대로 바꿈
      return { ...state, isLoading: !state.isLoading };
    case AuthFormTypes.RESET: //초기값으로 변경
      return initAuthForm;
    default:
      return state;
  }
};
// reducer, action에 따라 기존 state에 payload 추가,
