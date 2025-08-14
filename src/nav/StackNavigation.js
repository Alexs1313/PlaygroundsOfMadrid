import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Info from '../screens/Info';
import Recommends from '../screens/Recommends';
import Saved from '../screens/Saved';
import PlaceDetails from '../screens/PlaceDetails';
import Facts from '../screens/Facts';
import AddRoute from '../screens/AddRoute';
import Routes from '../screens/Routes';
import Onboard from '../screens/Onboard';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Recommends" component={Recommends} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
      <Stack.Screen name="Facts" component={Facts} />
      <Stack.Screen name="AddRoute" component={AddRoute} />
      <Stack.Screen name="Routes" component={Routes} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
