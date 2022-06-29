import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogContext from "../contexts/LogContext";

function FeedsScreen() {
  return (
    <View>
      {/* Context 안의 값 사용 -> Consumer컴포넌트 사용 */}
      <LogContext.Consumer>
        {/* Render Props 패턴: 컴포넌트 태그 사이에 함수 */}
        {(value) => <Text>{value}</Text>}
      </LogContext.Consumer>
    </View>
  );
}

export default FeedsScreen;

const styles = StyleSheet.create({});
