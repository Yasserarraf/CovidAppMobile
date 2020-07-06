import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';



const AuthContext = React.createContext();

export const info = ()=>{
  const [email,setEmail] = React.useState('');
  return {'email':email};
}

var isSignedIn = false;
  export default function Login({navigation}){
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    const  signIn  = ()=>{
      var SignInValidation = false;
        if(email == ""){
          alert("Email should not be Empty !!");
        }else if(password == ""){
          alert("Password should not be Empty !!");
        }else{
          SignInValidation = true;
          if(SignInValidation){

              navigation.navigate('FrontPage');


            fetch('http://localhost:8000/api/login',{
                method:'POST',
                headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({"email":email,"password":password})
              }).then(res => res.json())
              .then(resData =>{

                if(resData.success===true){
                  var user_id = resData.id;

                  AsyncStorage.setItem('user_id',user_id);

                  console.log(user_id);
                  }
                  else
                  {
                    alert(resData.message);
                  }

              }).catch(function(error) {
console.log('There has been a problem with your fetch operation: ' + error.message);
 // ADD THIS THROW error
  throw error;
});;


          }
        }


    };

      return(


        <View style={styles.container}>
          <Text style={styles.logo}>CovidApp</Text>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              value={email}
              onChangeText={setEmail}/>
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#003f5c"
              value={password}
              onChangeText={setPassword}/>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={signIn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>


        </View>



    	);
    }
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
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
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
