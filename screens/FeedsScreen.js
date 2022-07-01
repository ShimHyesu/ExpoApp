import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogContext from "../contexts/LogContext";

function FeedsScreen() {
  return (
    <View>
      {/* 
      <Box>
        <Text>1</Text>
      </Box>
      */}
      <Box>{(value) => <Text>{value}</Text>}</Box>
    </View>
  );
}

export default FeedsScreen;

function Box({ children }) {
  // Box컴포넌트 태그 사이에 넣은 JSX를 children이라는 Props로 받아와 사용 가능
  //return <View style={styles.box}>{children}</View>;

  //Hello World라는 값을 FeedsScreen 컴포넌트에 전달하여 사용하도록 만드는 방법
  return <View style={styles.box}>{children("Hello World")}</View>;
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: "black",
    marginBottom: 16,
  },
});
