import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";

const InputBox = () => {
  return (
    <View style={styles.container}>
      {/* <AntDesign name="plus" size={24} color="royalblue" /> */}
      <TextInput style={styles.input} placeholder="Message" />
      <MaterialIcons style={styles.send} name="send" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    padding: 6,
    paddingHorizontal:10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding:8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor:'lightgry',
    borderWidth: StyleSheet.hairlineWidth,

  },
  send: {
    backgroundColor: '#00A884',
    padding: 10,
    borderRadius: 40,
    overflow:'hidden'
  },
});

export default InputBox;
