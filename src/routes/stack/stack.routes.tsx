import { MonitoresPage } from '../../pages/monitores';
import { TabRoutes } from '../tabs/tab.routes';
import { createStackNavigator } from '@react-navigation/stack';
import { DisciplinasPage } from '../../pages/disciplinas';
import { InfoMonitorPage } from '../../pages/info-monitor/info-monitor.page';

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
        <Stack.Screen name="Disciplinas" component={DisciplinasPage} />
        <Stack.Screen name="InfoMonitorPage" component={InfoMonitorPage} />

      </Stack.Navigator>
    );
};