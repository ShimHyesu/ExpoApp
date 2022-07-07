import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchContext from "../contexts/SearchContext";
import LogContext from "../contexts/LogContext";
// 재사용
import FeedList from "../components/FeedList";
import EmptySearchResult from "../components/EmptySearchResult";

function SearchScreen({ navigation }) {
  const { keyword } = useContext(SearchContext);
  const { logs } = useContext(LogContext);

  const filtered =
    // 검색어 있을때 필터링, 없을때 빈 배열
    keyword === ""
      ? []
      : logs.filter((log) =>
          // some 배열 내장 함수 : 배열 원소 중 특정 조건이 true인 원소 하나라도 있으면 true, 모두 아니면 false
          // text.includes 문자열 내장 함수 : 텍스트에 특정 문자열이 존재하는지 확인 -> true/false
          [log.title, log.body].some((text) => text.includes(keyword))
        );

  if (keyword === "") {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
