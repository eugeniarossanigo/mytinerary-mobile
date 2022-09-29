
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../src/screens/Home'
import Cities from '../screens/Cities';
import Details from '../screens/Details';
import SignIn from '../screens/SignIn';
import UnderConstruction from '../screens/UnderConstruction';
import Stack from './Stack';

const DrawerNavigation = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator initialRouteName='Home'  screenOptions={{drawerStyle:{ backgroundColor:'#d7e7e3'}}}>
            <DrawerNavigation.Screen name="MyTinerary" component={Stack} />
            <DrawerNavigation.Screen name="Cities" component={Cities} />
            <DrawerNavigation.Screen name="SignIn" component={SignIn} />
        </DrawerNavigation.Navigator>
    );
}