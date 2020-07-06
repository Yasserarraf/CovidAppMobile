import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ImageBackground,TouchableOpacity} from 'react-native';





export default function Home({navigation}){

	return(
    <View style={styles.container}>
      <Text style={styles.logo}>CovidApp</Text>


    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text style={styles.loginText}>Signup</Text>
    </TouchableOpacity>

    </View>



	);
}




/*function fiche */


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#003f5c',
alignItems: 'center',
justifyContent: 'center',
},
logo:{
fontWeight:"bold",
fontSize:50,
color:"#fb5b5a",
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
