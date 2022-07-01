import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FloatingWriteButton from "../components/FloatingWriteButton";

function FeedsScreen() {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
}

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
