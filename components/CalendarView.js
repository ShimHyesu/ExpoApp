//
// 달력 기능 구현하기
//
import React from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

function CalendarView() {
  // 달력에 표시하기 위해 markedDates 객체 사용 -> 키 값은 yyyy-mm-dd형태
  // marked값을 true로 하면 날짜에 점, selected값을 true로 하면 날짜 배경색 변경
  const markedDates = {
    "2022-07-08": { selected: true },
    "2022-07-02": { marked: true },
    "2022-07-15": { marked: true },
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedDates}
      theme={{
        selectedDayBackgroundColor: "#009688",
        arrowColor: "#009688",
        dotColor: "#009688",
        todayTextColor: "#009688",
      }}
    />
  );
}

export default CalendarView;

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});
