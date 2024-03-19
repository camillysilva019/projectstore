import { NavigationContainer } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StackRoutes from './StackRoutes';
import Inicio from '../pages/Inicio';
import Contato from '../pages/Contato';
import Cursos from "../pages/Cursos";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#d3d3d3'

        }
    }} >
          <Tab.Screen
            name='Inicio'           
            component={Inicio}
            options={{
              headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#d3d3d3'
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesome5 name='home' color='black' size={size}></FontAwesome5>
            }}}
          />

          <Tab.Screen
          name='Store'
          component={StackRoutes}
          options={{
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#d3d3d3'
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesome5 name='book' color='black' size={size}></FontAwesome5>
            }}}
          />

          <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#d3d3d3'
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesome5 name='phone-square-alt' color='black' size={size}></FontAwesome5>
            }}}
          />
    

      </Tab.Navigator>
    )
  
    }