import React, { useState } from "react";
import { createContext } from "react";
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
  // WriteScreen의 onSave 함수에서 log 라우트 파라미터가 유효하면 수정하는 함수 호출,
  // 그렇지 않다면 생성하는 함수 호출
  const onModify = (modified) => {
    // logs 배열을 순회하여 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextLogs = logs.map((log) =>
      log.id === modified.id ? modified : log
    );
    setLogs(nextLogs);
  };

  return (
    <LogContext.Provider value={{ logs, onCreate, onModify }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
