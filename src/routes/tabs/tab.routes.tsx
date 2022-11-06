import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HomePage } from '../../pages/home';
import { MonitoresPage } from '../../pages/monitores';
import { DisciplinasPage } from '../../pages/disciplinas';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {

  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 50,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            bottom: 2,
            paddingBottom: 5,
            marginHorizontal: 1,
            backgroundColor: '#e6e9fb',
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="home"
                size={25}
                color={
                  focused ? '#001a9b' : '#8c9efa'
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Monitores"
          component={MonitoresPage}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="person-search"
                size={25}
                color={
                  focused ? '#001a9b' : '#8c9efa'
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Disciplinas"
          component={DisciplinasPage}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="library-books"
                size={25}
                color={
                  focused ? '#001a9b' : '#8c9efa'
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
};
