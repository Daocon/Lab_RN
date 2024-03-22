//cai thu vien: npm i expo-av
import React, { useState } from "react";
import { Audio } from "expo-av";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
export default function NgheNhac() {
  const [sound, setSound] = useState(null); //su dung useState
  //----dinh nghia ham ham play ban nhac
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({
      uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    });
    setSound(sound);
    await sound.playAsync();
  }
  //dinh nghia ham tam dung
  async function pauseSound() {
    if (sound) {
      await sound.stopAsync();
    }
  }
  //return
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={playSound} style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pauseSound} style={styles.button}>
        <Text style={styles.buttonText}>Pause</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
