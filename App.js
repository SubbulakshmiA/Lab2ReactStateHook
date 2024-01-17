import { StatusBar } from 'expo-status-bar';
import ImageComponent from './Components/ImageComponent';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageComponent titleText="Colors"
                      url = "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg"/>
      <StatusBar style="auto" />
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
});
