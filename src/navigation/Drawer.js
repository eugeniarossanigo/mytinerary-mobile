
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Home from '../../src/screens/Home'
import Cities from '../screens/Cities';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Stack from './Stack';
import { useUserLogoutMutation, useUserLoginTokenMutation } from "../redux/usersAPI";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCredentials, setCredentials } from '../redux/userSlice';
import { useEffect, useState } from 'react';
import MyTinerary from '../screens/MyTinerary';

const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [userLogout] = useUserLogoutMutation()
    const [loginToken] = useUserLoginTokenMutation()
    
    const user = useSelector(state => state.auth.user)
    const logged = useSelector(state => state.auth.logged)

    async function verifyToken(){
        let userToken = await AsyncStorage.getItem('token')
        try {
            let res = await loginToken(userToken)
            if(res?.data.success){
                dispatch(setCredentials(res.data.response.user))
            } else {
                await AsyncStorage.removeItem('token')
            }
        } catch(error) {
            AsyncStorage.removeItem('token')
            console.log(error)
        }
    }

    useEffect(() => {
        if (AsyncStorage.getItem('token')) {
            verifyToken()
        }
    }, [logged])

    const handleOut = async() => {
        let mail = user?.mail
        await userLogout({ mail })
        .then(response => {
            AsyncStorage.removeItem('token')
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
                { user &&
                <>
                    {/* <DrawerItem label="MyTnerary" component={SignIn} /> */}
                    <DrawerItem label="SignOut" onPress={handleOut} />
                </>
                }
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
            <DrawerNavigation.Screen name={user? `Hi ${user.name}!` : "Home"} component={Stack} />
            <DrawerNavigation.Screen name="Cities" component={Cities} />        
            { user?
            <DrawerNavigation.Screen name="MyTinerary" component={MyTinerary} />
            :
            <>
                <DrawerNavigation.Screen name="SignIn" component={SignIn} />
                <DrawerNavigation.Screen name="SignUp" component={SignUp} />
            </>
            }
        </DrawerNavigation.Navigator>
    );
}