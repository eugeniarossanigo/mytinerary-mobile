
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../src/screens/Home'
import Cities from '../screens/Cities';
import Details from '../screens/Details';
import UnderConstruction from '../screens/UnderConstruction';
import Stack from './Stack';

const DrawerNavigation = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator initialRouteName='Home'
        screenOptions={{
            drawerStyle: {
                backgroundColor: '#f7f3eeee'
            },
            drawerActiveBackgroundColor: '#fff',
            drawerActiveTintColor: '#377771',
            headerStyle: {
                backgroundColor: '#f7f3eee'
            },
            headerTitleStyle: {
                color: '#dfaa5b'
            }
        }} >
            <DrawerNavigation.Screen name="MyTinerary" component={Stack} />
            <DrawerNavigation.Screen name="Cities" component={Cities} />
            <DrawerNavigation.Screen name="Details" component={Details} />
            <DrawerNavigation.Screen name="UnderConstruction" component={UnderConstruction} />
        </DrawerNavigation.Navigator>
    );
}