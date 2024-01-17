import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button } from 'react-native';

export default function ImageComponent({titleText,url}) {
    return (
      <View style={styles.container}>
        <Text >{titleText}</Text>
       <Image 
       style = {styles.imageStyle}
       src = {url}></Image>
       <Button
       title='click me'></Button>
       </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageStyle:{
      marginTop:60,
        height:300,
        width:300
    },
  });