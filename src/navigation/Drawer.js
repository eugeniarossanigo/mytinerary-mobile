
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../src/screens/Home'
import Cities from '../screens/Cities';
import Details from '../screens/Details';
import UnderConstruction from '../screens/UnderConstruction';

const DrawerNavigation = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator initialRouteName='Home'>
            <DrawerNavigation.Screen name="MyTinerary" component={Home} />
            <DrawerNavigation.Screen name="Cities" component={Cities} />
            <DrawerNavigation.Screen name="Details" component={Details} />
            <DrawerNavigation.Screen name="UnderConstruction" component={UnderConstruction} />
        </DrawerNavigation.Navigator>
    );
}