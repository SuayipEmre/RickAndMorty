

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigatorStackParamList } from '../types/NavigatorsTypes';
import HomeScreen from '../screens/HomeScreen';
import EpisodeDetails from '../screens/EpisodeDetails';
import { useThemeColors } from '../store/features/appearance/hooks';

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()



export const MainStack: React.FC = () => {
    const colors = useThemeColors()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }} />


            <Stack.Screen
                name='EpisodeDetails'
                component={EpisodeDetails}
                options={({ route } ) => (
                    {
                      headerTitle: route.params.episode_name ?? "",
                      headerTitleStyle: {
                        fontSize: 18,
                      },
                      headerStyle :{
                        backgroundColor : colors.third
                      },

                    headerTintColor : colors.accent,
                   
                    }
                  )
                  }
              />


        </Stack.Navigator>
    )
}

