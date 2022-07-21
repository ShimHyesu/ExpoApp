import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { format } from "date-fns";

import CalendarView from "../components/CalendarView";
import LogContext from "../contexts/LogContext";
import FeedList from "../components/FeedList";

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

  // 현재 선택된 날짜로 로그를 필터링하여 FeedList에 전달하고 ListHeaderComponent에는 CalendarView 설정
  const filteredLogs = logs.filter(
    (log) => format(new Date(log.date), "yyyy-MM-dd") === selectedDate
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
});
