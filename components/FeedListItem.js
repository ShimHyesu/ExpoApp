import React from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";

// 방금 전, 3분 전, 1시간 전,.. 과 같은 날짜/시간 관련 다양한 기능 제공하는 라이브러리
// format: 다양한 형태로 날짜 포맷
// formatDistanceToNow: 현재 시각 기준으로 단어 사용해 시간 나타냄
import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

function formatDate(date) {
  const d = new Date(date);
  const now = Date.now();
  // 단위 밀리세컨드 -> 1000으로 나눠줌
  const diff = (now - d.getTime()) / 1000;

  // 1분 미만
  if (diff < 60 * 1) {
    return "방금 전";
  }
  // 3일 미만 -> 단어로
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, "PPP EEE p", { locale: ko });
}

function truncate(text) {
  // 정규식을 사용해 모든 줄 바꿈 문자 제거
  const replaced = text.toString().replace(/\n/g, "");
  // 100자 이상이면 자르고 줄임표 붙여주기
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat("...");
}

function FeedListItem({ log }) {
  const { title, body, date } = log;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.block,
        Platform.OS == "ios" && pressed && { backgroundColor: "#efefef" },
      ]}
      android_ripple={{ color: "#ededed" }}
    >
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
}

export default FeedListItem;

const styles = StyleSheet.create({
  block: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: "#546e7a",
    marginBottom: 8,
  },
  title: {
    color: "#263238",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    color: "#37474f",
    fontSize: 16,
    lineHeight: 21,
  },
});
