import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NgheNhac from './Demo4/NgheNhac';
import ChonAnh from './Demo4/ChonAnh';
import ChupAnh from './Demo4/ChupAnh';

export default function App() {
  return (
    // <NgheNhac/>
    // <ChonAnh/>
    <ChupAnh/>
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
