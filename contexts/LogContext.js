import React, { useState } from "react";
import { createContext } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const LogContext = createContext();

export function LogContextProvider({ children }) {
  const [logs, setLogs] = useState(
    Array.from({ length: 10 })
      .map((_, index) => ({
        id: uuidv4(),
        title: `Log ${index}`,
        body: `Log ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse()
  );

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

  return (
    <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
