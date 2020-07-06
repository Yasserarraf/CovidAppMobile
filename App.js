import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login,{isSignedIn} from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import FrontPage from './screens/FrontPage';
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title:'',headerStyle:{backgroundColor:'#fff'}}}>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="FrontPage" component={FrontPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
