import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ImageBackground,TouchableOpacity} from 'react-native';







  export default function Register({navigation}){
    const [firstName,setFirstName] = React.useState('');
    const [lastName,setLastName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    const  signUp  = ()=>{
      var SignInValidation = false;
        if(firstName == ""){
          alert("firstName should not be Empty !!");
        }else if(lastName == ""){
          alert("lastName should not be Empty !!");
        }else if(email == ""){
          alert("email should not be Empty !!");
        }else if(password == ""){
          alert("password should not be Empty !!");
        }else{

             fetch('http://localhost:8000/api/userp',{
                method:'POST',
                headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({"nom":firstName,"prenom":lastName,"email":email,"password":password})
              }).then(alert)
              .then(resData =>{
                console.log(resData);
              });
            navigation.navigate('FrontPage');


        }

    };

      return(


        <View style={styles.container}>
          <Text style={styles.logo}>CovidApp</Text>
          <View style={styles.inputView} >
            <TextInput

              style={styles.inputText}
              placeholder="First Name..."
              placeholderTextColor="#003f5c"
              value={firstName}
              onChangeText={(value)=>setFirstName(value)}/>
          </View>
          <View style={styles.inputView} >
            <TextInput

              style={styles.inputText}
              placeholder="Last Name..."

              placeholderTextColor="#003f5c"
              value={lastName}
              onChangeText={(value)=>setLastName(value)}/>
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Email..."

              placeholderTextColor="#003f5c"
                value={email}
              onChangeText={(value)=>setEmail(value)}/>
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."

              placeholderTextColor="#003f5c"
              value={password}
              onChangeText={(value)=>setPassword(value)}/>
          </View>

          <TouchableOpacity style={styles.registerBtn} onPress={signUp}>
            <Text style={styles.registerText}>Signup</Text>
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
  registerBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  registerText:{
    color:"white"
  }
});
