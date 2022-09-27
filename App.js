import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                {/* <Stack.Navigator initialRouteName="Home"> */}
                    <SafeAreaView style={styles.container}>
                        <Text>Hello!</Text>
                        <StatusBar style="auto" />
                    </SafeAreaView>
                {/* </Stack.Navigator> */}
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
