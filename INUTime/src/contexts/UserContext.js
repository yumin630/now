import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

const useUserState = () => useContext(UserContext);

export { UserProvider, useUserState };

// 유저의 로그인 정보와 같은 중요하고 광범위 하게 쓰이는 변수를 최상위 컴포넌트에서 선언하고 관리하는 것을 **글로벌 상태 관리**라고 한다.
// 하지만 이 변수를 사용해야 하는 컴포넌트까지 props로 계속 전달해야(**Prop Drilling**: 하위 컴포넌트로 데이터(props)를 전달하는 과정)하는 문제가 있다.
// Context API, 이 기능을 사용하면 하위 컴포넌트로 props를 바로 전달할 수 있다.

//createContext() 를 통해 객체를 생성하면 그 객체 안에 Provider, Consumer가 있다.
//최상위 컴포넌트에 Provider 컴포넌트를 감싸면 value 프롭스로 전달된 user, setUser가 하위 컴포넌트에서도 사용가능해 진다.
//하위 컴포넌트에는 Consumer 컴포넌트로 감싼다.
//UserProvider 함수는 children을 받아서 그 children에 prodvider를 감싸 리턴한다.

//하지만 이 또한 매번 createContext로 생성한 consumer로 감싸줘야하는 번거로움이 있다.
//useContext 훅으로 간편하게 해결가능.
// useUserState를 import 하면 어디에서든 consumer를 사용하지 않더라도 최상단에 위치한 user state를 사용가능.
//다시 App.js로 돌아가세요
