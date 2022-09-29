import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/screens/Home'
import Cities from '../screens/Cities';
import Details from '../screens/Details';
import UnderConstruction from '../screens/UnderConstruction';

const StackNavigation = createStackNavigator();

export default function Stack() {
    return (
        <StackNavigation.Navigator initialRouteName='Home'>
            <StackNavigation.Screen name="Home" component={Home} />
            <StackNavigation.Screen name="Cities" component={Cities} />
            <StackNavigation.Screen name="Details" component={Details} />
        </StackNavigation.Navigator>
    );
}