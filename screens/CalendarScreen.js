import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { format } from "date-fns";

import CalendarView from "../components/CalendarView";
import LogContext from "../contexts/LogContext";

function CalendarScreen() {
  const { logs } = useContext(LogContext);
  // 현재 선택된 날짜 상태관리
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  // logs 배열을 Calendar 컴포넌트의 markedDates Prop형태로 변환
  // reduce함수: 배열 내장 함수 -> 배열 안 값 연산하여 하나의 결과값 도출
  // reduce 첫번째 파라미터: 배열 각 우너소 특정값 연산하는 함수, 두번째 파라미터: 초기값
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});

  return (
    <CalendarView
      markedDates={markedDates}
      selectedDate={selectedDate}
      onSelectDate={setSelectedDate}
    />
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
});
