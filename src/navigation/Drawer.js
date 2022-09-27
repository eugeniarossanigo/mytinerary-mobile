
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../src/screens/Home'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator  initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}