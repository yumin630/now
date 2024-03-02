import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations';
import { LogBox } from 'react-native';
import { UserProvider } from './contexts/UserContext';
const App = () => {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

  return (
    <UserProvider>
      <StatusBar style={'dark'} />
      <Navigation />
    </UserProvider>
  );
};

export default App;

// 가장 최상단인 App 컴포넌트
// firebase가 AsyncStorage를 사용하고 있기 때문에 생기는 오류를 무시하기 위해 LogBox에 배열로 경고 매세지의 일부를 등록해 두면 해당 경고를 무시
// UserProvider로 최상위 컴포넌트를 감싼다면 모든 컴포넌트에서 useUserState를 통해 Usercontext.provider를 사용하여  user와 setUser를 전달받을 수 있다.
// UserContext 파일로 가보세요

//Navigations 파일로 가보세요 자동으로 index 파일을 인식하는 구조입니다.
