import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Message" />
        <View style={styles.fileIconContainer}>
          <MaterialIcons name="attach-file" size={24} color="gray" />
        </View>
        <View style={styles.cameraIconContainer}>
          <MaterialIcons name="camera-alt" size={24} color="gray" />
        </View>
      </View>

      <View style={styles.sendIconContainer}>
        <MaterialIcons name="send" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    padding: 10,
    paddingHorizontal: 3,
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    borderColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
  },
  sendIconContainer: {
    backgroundColor: "#00A884",
    padding: 10,
    borderRadius: 40,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  fileIconContainer: {
    marginTop: 8,
    transform: [{ rotate: "-45deg" }],
  },
  cameraIconContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
});

export default InputBox;
