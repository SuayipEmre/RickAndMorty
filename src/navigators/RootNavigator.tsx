
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { MainNavigatorStackParamList } from '../types/NavigatorsTypes';
import { MainStack } from './MainStack';
import FavoritesScreen from '../screens/FavoritesScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import { useThemeColors } from '../store/features/appearance/hooks';


type BottomNavigatorRootStackParamList = {
  ProfileScreen : undefined
  MainNavigator: NavigatorScreenParams<MainNavigatorStackParamList>
}
const Tab = createBottomTabNavigator<BottomNavigatorRootStackParamList>()

const RootNavigator = () => {

  const colors = useThemeColors()
  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarInactiveTintColor: colors.tabbar.inactive_tint_color,
          tabBarActiveTintColor: colors.tabbar.active_tint_color,
          tabBarStyle: {
            backgroundColor: colors.tabbar.backgorundColor,
            borderTopWidth: 0,
            elevation: 0,
          }
        }}
      >
        <Tab.Screen
          name='MainNavigator'
          component={MainStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={color} size={24} />
            ),
            tabBarLabel: 'Home'
          }}
        />
        <Tab.Screen
          name='ProfileScreen'
          component={FavoritesScreen}
         
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator