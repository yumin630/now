import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged as onAuthStateChangedFirebase,
  signOut as signOutFirebase,
  updateProfile,
} from 'firebase/auth';

export const getAuthErrorMessages = (errorCode) => {
  switch (errorCode) {
    case AuthErrorCodes.USER_DELETED:
      return '계정을 찾을 수 없습니다.';
    case AuthErrorCodes.INVALID_EMAIL:
      return '유효하지 않은 이메일 주소입니다.';
    case AuthErrorCodes.INVALID_PASSWORD:
      return '잘못된 비밀번호입니다.';
    case AuthErrorCodes.EMAIL_EXISTS:
      return '이미 가입된 이메일입니다.';
    case AuthErrorCodes.WEAK_PASSWORD:
      return '비밀번호는 최소 6자리 입니다.';
    default:
      return '로그인에 실패했습니다.';
  }
};

export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  return user;
};
// firebase의 Authenticaiton에는 로그인 기능을 쉽게 만들어주는 기능을 제공한다.
// signInWithEmailAndPassword()함수를 이용하면 로그인이 가능하다.
// 첫 파라미터로는 Auth를 전달해야 하는데 getAuth를 통해 가능하다.
//  Promise<UserCredential>를 반환한다. user라는 객체가 들어있고 그 안에 사용자 정보가 있다.

const PHOTO_URL =
  'https://firebasestorage.googleapis.com/v0/b/rn-photo-9e51f.appspot.com/o/profile.png?alt=media';

export const signUp = async ({ email, password }) => {
  const { user } = await createUserWithEmailAndPassword(
    getAuth(),
    email,
    password
  );

  await updateUserInfo({
    displayName: email.split('@')[0].slice(0, 10),
    photoURL: PHOTO_URL,
  });

  return user;
};

export const onAuthStateChanged = (callback) => {
  return onAuthStateChangedFirebase(getAuth(), callback);
};

export const signOut = async () => {
  await signOutFirebase(getAuth());
};

const updateUserInfo = async (userInfo) => {
  try {
    await updateProfile(getAuth().currentUser, userInfo);
  } catch (e) {
    throw new Error('사용자 정보 수정에 실패했습니다.');
  }
};
