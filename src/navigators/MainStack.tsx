

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigatorStackParamList } from '../types/NavigatorsTypes';
import HomeScreen from '../screens/HomeScreen';
import EpisodeDetails from '../screens/EpisodeDetails';
import { useThemeColors } from '../store/features/appearance/hooks';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Dimensions, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()



export const MainStack: React.FC = () => {
    const colors = useThemeColors()
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
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
                    headerLeft: () => (
                      <View style={styles.header_left}>
                        <Ionicons name='arrow-back' size={24} color={colors.accent} onPress={() => navigation.goBack()}  />
                      </View>
                    ),
                    }
                  )
                  }
              />


        </Stack.Navigator>
    )
}

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
 
  header_left:{
    width : width * 0.1,
    alignItems:'center',
  },
})