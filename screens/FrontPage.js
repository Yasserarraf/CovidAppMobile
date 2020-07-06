import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Questionnaire from './Questionnaire';
import Map from './Map';
import HomePage from './HomePage';

const MyDrawer = createDrawerNavigator();



export default class FrontPage extends Component{

	  constructor(props) {
	    super(props);
	  }



render(){


	return(

		<MyDrawer.Navigator >
			<MyDrawer.Screen name="HomePage" component={HomePage}/>
			<MyDrawer.Screen name="Map" component={Map}/>
			<MyDrawer.Screen name="Questionnaire" component={Questionnaire}/>
		</MyDrawer.Navigator>


);
}

}
/*function fiche */


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
logo:{
fontWeight:"bold",
fontSize:50,
color:"#003f5c",
marginBottom:40
},
loginBtn:{
	width:"80%",
	backgroundColor:"#fb5b5a",
	borderRadius:25,
	height:50,
	alignItems:"center",
	justifyContent:"center",
	marginTop:40,
	marginBottom:10
},
loginText:{
	color:"white"
}
});
