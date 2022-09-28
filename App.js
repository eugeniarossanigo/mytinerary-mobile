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


// export default function App() {
//     return (
//         <Provider store={store}>
//             <NavigationContainer>
//                 {/* <Stack.Navigator initialRouteName="Home"> */}
//                     <SafeAreaView style={styles.container}>
//                         <Text>Hello!</Text>
//                         <StatusBar style="auto" />
//                     </SafeAreaView>
//                 {/* </Stack.Navigator> */}
//             </NavigationContainer>
//         </Provider>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
