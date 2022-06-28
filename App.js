import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>안녕</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
