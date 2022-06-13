import { View, StyleSheet } from 'react-native';
import Main from './src/components/Main' 

export default function App() {
  return (
    <View style={styles.container}>
        <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
