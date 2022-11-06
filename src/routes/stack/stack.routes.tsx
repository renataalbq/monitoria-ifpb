import { MonitoresPage } from '../../pages/monitores';
import { TabRoutes } from '../tabs/tab.routes';
import { createStackNavigator } from '@react-navigation/stack';
import { DisciplinasPage } from '../../pages/disciplinas';
import { ContatoMonitorPage } from '../../pages/contato-monitor/contato-monitor.page';
import { MonitoriaPage } from '../../pages/monitoria/monitoria.page';
import { InfoDisciplinaPage } from '../../pages/info-disciplina/info-disciplina.page';

const Stack = createStackNavigator();

export const StackAppRoutes = () => {
    return (
      <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            headerShown: true,
        }}>
        <Stack.Screen name="Home" component={TabRoutes} options={{headerShown: false}} />
        <Stack.Screen name="Monitores" component={MonitoresPage} options={{headerShown: false}} />
        <Stack.Screen name="Disciplinas" component={DisciplinasPage} options={{headerShown: false}} />
        <Stack.Screen name="ContatoMonitorPage" component={ContatoMonitorPage} options={{ title: 'Contatos' }} />
        <Stack.Screen name="MonitoriaPage" component={MonitoriaPage} options={{ title: 'Horários da monitoria' }} />
        <Stack.Screen name="InfoDisciplinaPage" component={InfoDisciplinaPage} options={({ route }) => ({ title: route.params?.nome })} />

      </Stack.Navigator>
    );
};