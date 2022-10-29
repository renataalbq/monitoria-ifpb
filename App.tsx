import { HomePage } from './src/pages/home/home.page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MonitoresPage } from './src/pages/monitores';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DisciplinasPage } from './src/pages/disciplinas';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="MonitoresPage" component={MonitoresPage} />
      <Stack.Screen name="DisciplinasPage" component={DisciplinasPage} />


    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {

        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
        } else if (route.name === 'Monitores') {
          iconName = 'people';
        } else if (route.name === 'Disciplinas') {
          iconName = 'albums'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Monitores" component={MonitoresPage} />
      <Tab.Screen name="Disciplinas" component={DisciplinasPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}