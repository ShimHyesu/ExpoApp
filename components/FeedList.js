import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import FeedListItem from "./FeedListItem";

function FeedList({ logs, onScrolledToBottom }) {
  const onScroll = (e) => {
    // 예외처리: onScrolledToBottom Props가 설정되지 않았을때 함수가 없으면 아무것도 하지 않도록
    if (!onScrolledToBottom) {
      return;
    }

    const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;

    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    // 예외처리: 항목 개수가 적어서 스크롤이 필요 없는 상황
    if (
      distanceFromBottom < 72 &&
      contentSize.height > layoutMeasurement.height
    ) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };

  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={(log) => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      // 스크롤이 바닥에 가까워지면 글쓰기 버튼 숨기고, 멀어지면 글쓰기 버튼 보여주기 위해 사용
      onScroll={onScroll}
    />
  );
}

export default FeedList;

const styles = StyleSheet.create({
  block: { flex: 1 },
  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
    width: "100%",
  },
});
