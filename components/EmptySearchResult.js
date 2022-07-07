import React from "react";
import { View, Text, StyleSheet } from "react-native";

const messages = {
  NOT_FOUND: "검색 결과가 없습니다.",
  EMPTY_KEYWORD: "검색어를 입력하세요.",
};

// 검색 결과가 없을 떄 안내 문구를 보여주는 컴포넌트
function EmptySearchResult({ type }) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{messages[type]}</Text>
    </View>
  );
}
export default EmptySearchResult;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#9e9e9e",
    fontSize: 16,
  },
});
