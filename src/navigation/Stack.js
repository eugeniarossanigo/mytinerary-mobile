import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Home from '../../src/screens/Home'
import Cities from '../screens/Cities';
import Details from '../screens/Details';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MyTinerary from '../screens/MyTinerary';

const StackNavigation = createStackNavigator();

export default function Stack() {
    const user = useSelector(state => state.auth.user)

    return (
        <StackNavigation.Navigator initialRouteName='Home'>
            <StackNavigation.Screen name="Home" component={Home} options={{headerShown: false}} />
            <StackNavigation.Screen name="Cities" component={Cities} options={{headerShown: false}} />
            <StackNavigation.Screen name="Details" component={Details} options={{headerShown: false}} />
            <StackNavigation.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <StackNavigation.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            <StackNavigation.Screen name="MyTinerary" component={MyTinerary} options={{headerShown: false}} />
        </StackNavigation.Navigator>
    );
}