import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import bimage from "../../assets/images/BG.png";
import MessageCom from "../components/Message/MessageCom";
import messages from "../../assets/data/messages.json";
// import MessageCom from

const InboxScreen = () => {
  return (
    <ImageBackground source={bimage} style={styles.bimage}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageCom message={item} />}
        style={styles.list}
        inverted
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bimage: {
    flex: 1,
  },
  list:{
    padding: 10,
  }
});
export default InboxScreen;
