//npm install expo-camera
import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
const ChupAnh = () => {
  //quan ly quyen
  const [hasPer, setHasPer] = useState(null);
  const cameraRef = useRef();
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPer(status === "granted");
    })();
  }, []);
  const chup = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log("anh da duoc chup: ", photo.uri);
    }
  };
  return (
    <View style={styles.container}>
      {hasPer ? (
        <Camera
          style={styles.camera}
          ref={cameraRef}
          type={Camera.Constants.Type.back}
        />
      ) : (
        <Text>Khong co quyen truy cap camera</Text>
      )}
      <TouchableOpacity style={styles.captureButton} onPress={chup}>
        <Text style={styles.captureText}>Chup anh</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: "100%",
    height: "75%",
  },
  captureButton: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
  },
  captureText: {
    color: "white",
  },
});
export default ChupAnh;
