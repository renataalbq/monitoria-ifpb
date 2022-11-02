import { MonitoresPage } from '../../pages/monitores';
import { TabRoutes } from '../tabs/tab.routes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const StackAppRoutes = () => {
    return (
      <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TabRoutes} />
        <Stack.Screen name="Monitores" component={MonitoresPage} />
      </Stack.Navigator>
    );
};