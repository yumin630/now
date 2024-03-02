import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { useUserState } from '../contexts/UserContext';
import MainStack from './MainStack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '../api/auth';
import { Asset } from 'expo-asset';
import { initFirebase } from '../api/firebase';
import * as SplashScreen from 'expo-splash-screen';

const ImageAssets = [
  require('../../assets/cover.png'),
  require('../../assets/home-clock.png'),
  require('../../assets/home-map.png'),
  require('../../assets/icon.png'),
];
// 어플이 가동하기 전에 필요한 이미지를 미리 캐싱하는 작업을 위해 requrie를 선언해 둔 함수입니다.
const Navigation = () => {
  const [user, setUser] = useUserState();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Promise.all(
          ImageAssets.map((image) => Asset.fromModule(image).downloadAsync)
        );

        initFirebase();
        const unsubscribe = onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          }
          unsubscribe();
        });
      } catch (e) {
        // eslint-disable
        console.log(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, [setUser]);

  const onReady = async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      {user.uid ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;

// SplashScreen의 preventAutoHideAsync() 함수를 이용해서 Splash 이미지를 계속 보여주고 hideAsync() 함수를 이용해서 Splash 이미지를 사라지게 하고 스크린을 보이게 한다.

// preventAutoHideAsync, hideAsync, downloadAsync는 비동기 함수이므로 async await 함수를 사용해야 한다.
// useEffect에다 사용할 경우에는 useEffect에 전달되는 함수는 async 함수는 전달되지 못하니 즉시 실행 함수로 만들어서 전달하면 된다.

// ImageAssets에 있는 모든  promise.all로 등록된 모든 비동기 함수를 시작. require에 대해 순회를 걸어 캐싱한 후 firebase를 초기화 합니다. firebase는 앱이 처음 구동될 떄 초기화가 시행되어야 합니다.

// 어플을 새로고침해도 로그인을 유지해야합니다.
// firebase에서는 로그인을 유지하는 기능을 제공하는 onAuthStateChanged() 함수를 제공한다
//이 함수는 로그인한 유저의 정보를 알려주는 기능을 한다.
// 콜백으로 전달된 유저 객체가 있으면 로그인한 사용자가 있다고 판단하면 된다.
// unsubscribe를 반환하므로 마지막에 unsubscribe()를 호출하면 더이상 인증된 사용자 정보를 중복해서 확인하지 않는다.

// return 문까지 도달했다면 onReady 함수를 호출해 Splash 이미지를 숨기고 user.uid에 따라 로그인이 되어있다면 MainStack을 되어있지 않다면 AuthStack을 보여준다.
//View 컴포넌트의 onLayout은 마운트되었을 때나 레이아웃이 변경되었을 때 호출되는 프롭스. 이 프롭스를 이용해서 화면이 준비되었음을 알림
// 네비게이션컨테이너 컴포넌트에서는 onReady가 있음

// AuthStack으로 가세요

//MainStack으로 가세요
