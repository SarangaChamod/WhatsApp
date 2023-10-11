import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import bimage from "../../assets/images/BG.png";
import MessageCom from "../components/Message/MessageCom";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox/InputBox";
// import MessageCom from

const InboxScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'iso' ? 'padding' : 'height'}
    style={styles.bimage}>
    <ImageBackground source={bimage} style={styles.bimage}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageCom message={item} />}
        style={styles.list}
        inverted
      />
    <InputBox/> 
    </ImageBackground>
    </KeyboardAvoidingView>
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
