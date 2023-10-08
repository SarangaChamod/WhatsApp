import { View, Text } from "react-native";
import React from "react";

const MessageCom = ({message}) => {
  return (
    <View>
      <Text>{message.text}</Text>
    </View>
  );
};

export default MessageCom;
