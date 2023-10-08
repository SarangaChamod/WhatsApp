import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListItem/profile";
import ChatScreen from "./src/screens/ChatScreen";
import InboxScreen from "./src/screens/InboxScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <InboxScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
