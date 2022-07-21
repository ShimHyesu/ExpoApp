import React, { useEffect, useRef } from "react";
import { createContext, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import logsStorage from "../storages/logsStorage";

const LogContext = createContext();

export function LogContextProvider({ children }) {
  const initialLogsRef = useRef(null);
  const [logs, setLogs] = useState([]);

  const onCreate = ({ title, body, date }) => {
    const log = { id: uuidv4(), title, body, date };
    setLogs([log, ...logs]);
  };

  // 수정 기능 구현
  const onModify = (modified) => {
    const nextLogs = logs.map((log) =>
      log.id === modified.id ? modified : log
    );
    setLogs(nextLogs);
  };

  // 삭제 기능 구현
  const onRemove = (id) => {
    const nextLogs = logs.filter((log) => log.id !== id);
    setLogs(nextLogs);
  };

  useEffect(() => {
    // useEffect 내에서 async 함수 만들고 바로 호출
    // IIFE 패턴
    // async () => {
    //   const savedLogs = await logsStorage.get();
    //   if (savedLogs) {
    //     initialLogsRef.current = savedLogs;
    //     setLogs(savedLogs);
    //   }
    // };

    // IIFE를 사용하지 않는 코드 예제
    const save = async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    };
    save();
  }, []);

  // logs 배열 바뀔때마다 logsStorage에 저장하도록
  // 불러오는데 호출될때 두번째 useEffect 실행되기에 한번더 저장되게 됨
  // 방지하기 위해 불러온 초기 데이터 useRef로 기억하도록 함
  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  return (
    <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
