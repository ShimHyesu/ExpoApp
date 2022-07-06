import React, { useState } from "react";
import { createContext } from "react";
// 고유한 값 생성해주는 uuid 라이브러리 사용
// 일반적으로 랜덤하고 고유한 식별자 생성에는 v4 많이 사용
import { v4 as uuidv4 } from "uuid";

const LogContext = createContext();

export function LogContextProvider({ children }) {
  const [logs, setLogs] = useState([]);

  const onCreate = ({ title, body, date }) => {
    const log = { id: uuidv4(), title, body, date };
    // spread 연산자 -> 새로 만든 객체가 맨 앞에 추가
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{ logs, onCreate }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
