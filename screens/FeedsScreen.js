import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import FloatingWriteButton from "../components/FloatingWriteButton";

import LogContext from "../contexts/LogContext";
import FeedList from "../components/FeedList";

function FeedsScreen() {
  const { logs } = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  // 스크롤 위치에 따라 hidden 값 변경
  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
