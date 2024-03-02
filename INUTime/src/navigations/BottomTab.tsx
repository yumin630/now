import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as SVG from '../assets/svg';
import HomeScreen from '../screens/Main/HomeScreen';
import CommunityScreen from '../screens/Main/CommunityScreen';
import ChatScreen from '../screens/Main/ChatScreen';
import MyPageScreen from '../screens/Main/MyPageScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#7FB3FA',
            borderTopWidth: 0,
            paddingTop: 10,
            marginBottom: -10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'HomeScreen') {
              return <SVG.Home />;
            } else if (route.name === 'CommunityScreen') {
              return <SVG.Community />;
            } else if (route.name === 'ChatScreen') {
              return <SVG.Chat />;
            } else if (route.name === 'MyPageScreen') {
              return <SVG.MyPage />;
            }
          },
          tabBarLabel: '',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="MyPageScreen"
          component={MyPageScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
