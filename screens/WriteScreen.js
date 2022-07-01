import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";

import WriteHeader from "../components/WriteHeader";
import WriteEditor from "../components/WriteEditor";

function WriteScreen() {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
      <WriteEditor />
    </SafeAreaView>
  );
}

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "white",
    //SafeAreaView 적용 안될때 사용
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
