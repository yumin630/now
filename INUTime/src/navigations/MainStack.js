import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainRoutes, SettingRoutes } from './routes';
import { WHITE } from '../colors';
import ContentTap from './ContentTap';
import SelectPhotosScreen from '../screens/SelectPhotosScreen';
import WritedScreen from '../screens/WritedScreen';
import ScoreScreen from '../screens/ScoreScreen';
import ScrapScreen from '../screens/ScrapScreen';
import CommentScreen from '../screens/CommentScreen';
import DepartmemtScreen from '../screens/DepartmentScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
      }}
    >
      <Stack.Screen name={MainRoutes.CONTENT_TAB} component={ContentTap} />
      <Stack.Screen
        name={MainRoutes.SELECT_PHOTOS}
        component={SelectPhotosScreen}
      />
      <Stack.Screen name={SettingRoutes.WRITED} component={WritedScreen} />
      <Stack.Screen name={SettingRoutes.SCORE} component={ScoreScreen} />
      <Stack.Screen name={SettingRoutes.SCRAP} component={ScrapScreen} />
      <Stack.Screen name={SettingRoutes.COMMENT} component={CommentScreen} />
      <Stack.Screen name={'Depart'} component={DepartmemtScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
// 스크린 추가하시면 됩니다. 모르시는거 있으면 물어보세요
