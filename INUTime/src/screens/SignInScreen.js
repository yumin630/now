import {
  Alert,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Input, { InputTypes, ReturnKeyTypes } from '../components/Input';
import { useCallback, useReducer, useRef } from 'react';
import Button from '../components/Button';
import SafeInputView from '../components/SafeInputView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextButton from '../components/TextButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../navigations/routes';
import HR from '../components/HR';
import { StatusBar } from 'expo-status-bar';
import { WHITE } from '../colors';
import {
  AuthFormTypes,
  authFormReducer,
  initAuthForm,
} from '../reducers/authFormReducer';
import { getAuthErrorMessages, signIn } from '../api/auth';
import { useUserState } from '../contexts/UserContext';

const SignInScreen = () => {
  const passwordRef = useRef();

  const [form, dispatch] = useReducer(authFormReducer, initAuthForm);
  //유저 양식은 authFormReducer 파일에 있음. reducer를 사용하면 state 여러개를 관리할 수 있다.

  const { top, bottom } = useSafeAreaInsets();
  // useSafeAreaInsets()를 사용하여 top 변수에 패딩 값을 받아 paddingTop: top으로 전달한다.
  const { navigate } = useNavigation();
  const [, setUser] = useUserState();

  useFocusEffect(
    useCallback(() => {
      return () => dispatch({ type: AuthFormTypes.RESET }); //
    }, [])
  );
  // 컴포넌트가 포커스를 얻을 떄 호출되는 Hook, useCallback과 같이 사용해야한다. 포커스를 잃을 때는 return에 전달한 함수가 호출된다.  전달된 함수를 기억하고 있다가 재사용하는 훅
  const updateForm = (payload) => {
    //객체를 전달받아
    const newForm = { ...form, ...payload }; //기존의 form과 입력된 값이 반영된 새로운 객체를 만든다.
    const disabled = !newForm.email || !newForm.password; //새로만들어진 이메일이 없거나 패스워드가 없으면 true

    dispatch({
      type: AuthFormTypes.UPDATE_FORM,
      payload: { disabled, ...payload }, //-> authFormReducer 파일의 authFormReducer함수와 비교해서 보면 알 수 있음.
    });
  };

  const onSubmit = async () => {
    Keyboard.dismiss(); //키보드를 사라지게 하고
    if (!form.disabled && !form.isLoading) {
      //두 개가 모두 false일 때 로그인 진행
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
      try {
        const user = await signIn(form);
        setUser(user); // 로그인 정보 유지를 위함
      } catch (e) {
        const message = getAuthErrorMessages(e.code);
        Alert.alert('로그인 실패', message, [
          {
            text: '확인',
            onPress: () => dispatch({ type: AuthFormTypes.TOGGLE_LOADING }),
          },
        ]);
      }
    }
  };

  return (
    <SafeInputView>
      {/* SafeInputView 파일로 */}
      <StatusBar style={'light'} />
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={StyleSheet.absoluteFillObject}>
          <Image
            source={require('../../assets/cover.png')}
            style={{ width: '100%' }}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView
          style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 40 }]}
          contentContainerStyle={{ alignItems: 'center' }}
          bounces={false}
          keyboardShouldPersistTaps={'always'}
        >
          <Input
            inputType={InputTypes.EMAIL}
            value={form.email}
            onChangeText={(text) => updateForm({ email: text.trim() })}
            //onChange,onChangeText props로 TextInput 컴포넌트에 입력한 텍스트를 Hook의 상태 변환 함수에 전달하여 상태 변수를 변경할 수 있다.(callback) email 이라는 상태변수를 text로 바꾸라는 action
            onSubmitEditing={() => passwordRef.current.focus()}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            ref={passwordRef}
            inputType={InputTypes.PASSWORD}
            value={form.password}
            onChangeText={(text) => updateForm({ password: text.trim() })}
            onSubmitEditing={onSubmit}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Button
            title={'SIGNIN'}
            disabled={form.disabled}
            isLoading={form.isLoading}
            onPress={onSubmit}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.DONE}
          />
          <HR text={'OR'} styles={{ container: { marginVertical: 30 } }} />
          <TextButton
            title={'SIGNUP'}
            onPress={() => navigate(AuthRoutes.SIGN_UP)}
          />
        </ScrollView>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 30,
  },
  form: {
    flexGrow: 0,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 20,
  },
});

export default SignInScreen;

//ref : 리액트에서 특별히 관리하는 props 중 하나
// ref는 React에서**DOM에 직접 접근하기 위해**사용한다
// ref를 지정해서 해당 컴포넌트를 지정(포커스)할 수 있다.
// 특정 컴포넌트에 A ref를 전달하고 다른 컴포넌트에서 A.current.foucs하면 A로 포커스가 간다.
// const valueRef = useRef(초기값);
// valueRef.current에 값이 들어간다.
// useRef로 생성된 변수는 변경되어도 리랜더링 되지 않는다.
// 함수 컴포넌트에서는 ref를 전달 받을 수 없기 때문에 forwardRef로 감싸줘야 한다.

//useReducer useState처럼 상태변수 관리하는 훅
// const [state, dispath] = useReducer(reducer,iniState)의 형태
// dispatch: reducer로 action을 전달하는 함수, action: 현재 상태를 어떻게 변경해야 하는지에 대한 행동 지침, reducer: state와 action을 받아서 변경된 상태를 반환하는 함수, init은 state의 초기값,  reducer는 반드시 순수 함수여야 한다.

//다 봤으면 AuthStack으로
