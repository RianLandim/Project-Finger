import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Home } from "../../pages";

export type StackRouteProps = {
  Login: undefined;
  Home: undefined;
};

export function StackRoutes() {
  const Stack = createNativeStackNavigator<StackRouteProps>();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
