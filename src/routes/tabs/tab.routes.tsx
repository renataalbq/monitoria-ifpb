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
            height: 47,
            paddingBottom: 1,
            backgroundColor: '#66a45c',
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomePage}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="home"
                size={25}
                color={
                  focused ? '#FAB246' : '#fdfdfd'
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
                  focused ? '#FAB246' : '#fdfdfd'
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
                  focused ? '#FAB246' : '#fdfdfd'
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
};
