import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";

const InputBox = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput style={styles.input} placeholder="type your message..." />
      <MaterialIcons style={styles.send} name="send" size={24} color="royalblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor:'lightgry',
    borderWidth: StyleSheet.hairlineWidth,

  },
  send: {
    
  },
});

export default InputBox;
