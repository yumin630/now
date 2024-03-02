import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { AuthRoutes } from './routes';
import { WHITE } from '../colors';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
      }}
    >
      <Stack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={AuthRoutes.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

// 여기는 간단하니 패스.
// 앞으로 스크린의 이름을 AuthRoutes 파일에서 관리하도록 하겠습니다.
// SignInScreen으로 가세요

//SignUpScreen은 SignInScreen과 매우 유사하니 패스 다시 index로 돌아가세요
