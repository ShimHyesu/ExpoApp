//
// 달력 기능 구현하기
//
import React from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

function CalendarView({ markedDates, selectedDate, onSelectDate }) {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      // 달력에서 날짜를 선택했을 때 onSelectDate호출
      onDayPress={(day) => {
        onSelectDate(day.dateString);
      }}
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
