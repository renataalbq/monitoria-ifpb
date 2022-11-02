import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HomePage } from '../../pages/home';
import { MonitoresPage } from '../../pages/monitores';
import { DisciplinasPage } from '../../pages/disciplinas';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 50,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            bottom: 10,
            paddingBottom: 10,
            marginHorizontal: 5,
            backgroundColor: '#f4f4f4',
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
                  focused ? '#7303af' : '#4f4f4f'
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
                  focused ? '#7303af' : '#4f4f4f'
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
                  focused ? '#7303af' : '#4f4f4f'
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
