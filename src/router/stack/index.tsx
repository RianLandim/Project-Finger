import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../pages/login';

type StackRouteProps = {
  Login: undefined,
  Home: undefined
}

export function StackRoutes() {

  const Stack = createNativeStackNavigator<StackRouteProps>();

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}