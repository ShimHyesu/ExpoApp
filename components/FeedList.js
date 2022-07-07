import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import FeedListItem from "./FeedListItem";

function FeedList({ logs, onScrolledToBottom }) {
  const onScroll = (e) => {
    // contentSize.height: Flatlist 내부의 전체 크기
    // layoutMeasurement.height: 화면에 나타난 Flatlist의 실제 크기
    // contentOffset.y: 스크롤할 때마다 늘어나는 값
    // contentSize.height - layoutMeasurement.height - contentOffset.y 계산값이 0에 가까워지면 스크롤이 바닥에 가까워지는 것
    const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;

    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromBottom < 72) {
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
