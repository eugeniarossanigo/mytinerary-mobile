
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../src/screens/Home'
import Cities from '../screens/Cities';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Stack from './Stack';
import { useUserLogoutMutation } from "../redux/usersAPI";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCredentials } from '../redux/userSlice';
import MyTinerary from '../screens/MyTinerary';

const DrawerNavigation = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

export default function Drawer() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [userLogout] = useUserLogoutMutation()
    
    const user = useSelector(state => state.auth.user)
    // // const userRole = user?.role
    // const logged = useSelector(state => state.auth.logged)

    const handleOut = async() => {
        let mail = user?.mail
        await userLogout({ mail })
        .then(response => {
            AsyncStorage.setItem('token')
            dispatch(deleteCredentials())
            navigation.navigate('Home')
        })
        .catch(error =>
            console.log(error))
    }

    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label="SignOut" onPress={handleOut} />
            </DrawerContentScrollView>
        );
    }

    return (
        <DrawerNavigation.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName='Home'
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
            <DrawerNavigation.Screen name="Home" component={Stack} />
            <DrawerNavigation.Screen name="Cities" component={Cities} />
            <DrawerNavigation.Screen name="SignIn" component={SignIn} />
            <DrawerNavigation.Screen name="SignUp" component={SignUp} />
            <DrawerNavigation.Screen name="MyTinerary" component={MyTinerary} />
        </DrawerNavigation.Navigator>
    );
}