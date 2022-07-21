import React, { useContext, useState, useMemo } from "react";
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

  // markedDates는 날짜가 바뀌어도 변하지 않기 때문에 매번 리렌더링 될 필요x
  // useMemo Hook 사용하여 이전 계산한 값 재사용하여 처리 최적화
  // logs 배열 바뀔때만 logs.reduce함수 수행
  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [logs]
  );

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
