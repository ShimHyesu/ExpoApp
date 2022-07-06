import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import FloatingWriteButton from "../components/FloatingWriteButton";

import LogContext from "../contexts/LogContext";

function FeedsScreen() {
  const { logs } = useContext(LogContext);

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
