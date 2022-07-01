import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import LogContext from "../contexts/LogContext";

function FeedsScreen() {
  //useContext Hook함수로 Context값을 훨씬 간결하게 사용 가능
  const { text, setText } = useContext(LogContext);

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="텍스트를 입력하세요"
        style={styles.input}
      />
    </View>
  );
}

export default FeedsScreen;

const styles = StyleSheet.create({
  input: {
    padding: 16,
    backgroundColor: "white",
  },
});
