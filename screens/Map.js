import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';




export default function Map({navigation}){

	return(
		<WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={styles.map}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head>
                    <body>
                      <div id="baseDiv">
											<iframe width="100%" height="1500" src="https://app.developer.here.com/coronavirus/" frameborder="0">
											</iframe>
											</div>
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />



	);
}




/*function fiche */


const styles = StyleSheet.create({
map:{
	width:'100%',
	height:'100%'
}
});
