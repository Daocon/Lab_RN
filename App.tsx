import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import NgheNhac from "./Demo4/NgheNhac";
import ChonAnh from "./Demo4/ChonAnh";
import ChupAnh from "./Demo4/ChupAnh";
import GD from "./Demo5/viewApp";
import AppDemo5 from "./Demo5/AppDemo5";
import AppDemo6 from "./Demo6/AppDemo6";
import Demo71 from "./Demo7/Demo71";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NgheNhac/>
      <ChonAnh/>
      <ChupAnh/>
      <AppDemo5/>
      <AppDemo6/> */}
      <Demo71 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
