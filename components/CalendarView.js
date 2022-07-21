//
// 달력 기능 구현하기
//
import React from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

function CalendarView() {
  return <Calendar style={styles.calendar} />;
}

export default CalendarView;

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});
