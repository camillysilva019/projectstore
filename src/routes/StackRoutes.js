import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cursos from '../pages/Cursos'
import Detalhes from '../pages/Detalhes'

const Stack = createNativeStackNavigator();



export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Cursos'
                component={Cursos}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name='Detalhes'
                component={Detalhes}
            />
        </Stack.Navigator>
    )
}