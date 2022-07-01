import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import LogContext from "../contexts/LogContext";

//LogContext가 지닌 값 화면에 띄우기
function CalendarScreen() {
  const { text } = useContext(LogContext);

  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  text: {
    padding: 16,
    fontSize: 24,
  },
});
