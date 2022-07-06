import React, { useState } from "react";
import { createContext } from "react";
// 고유한 값 생성해주는 uuid 라이브러리 사용
// 일반적으로 랜덤하고 고유한 식별자 생성에는 v4 많이 사용
// 최상위 디렉터리(index.js)에 하단 추가해야함 -> expo에서는 package.json의 main 확인
// import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";

const LogContext = createContext();

export function LogContextProvider({ children }) {
  const [logs, setLogs] = useState([
    {
      id: uuidv4(),
      title: "Log 03",
      body: "Log 03",
      date: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      title: "Log 02",
      body: "Log 02",
      date: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    },
    {
      id: uuidv4(),
      title: "Log 01",
      body: "Log 01",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    },
  ]);

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
