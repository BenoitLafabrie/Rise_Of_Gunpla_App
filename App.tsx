import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const placeholderImage = require("./assets/Placeholder_image.webp");

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={placeholderImage} resizeMode="contain" />
      </View>
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
