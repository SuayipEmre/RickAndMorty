

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigatorStackParamList } from '../types/NavigatorsTypes';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()



export const MainStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }} />

            
        </Stack.Navigator>
    )
}

