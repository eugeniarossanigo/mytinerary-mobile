import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './src/navigation/Drawer';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer />
            </NavigationContainer>
        </Provider>
    );
}