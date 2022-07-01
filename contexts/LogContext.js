import React, { useState } from "react";
import { createContext } from "react";

//Provider 전용 컴포넌트를 따로 만드는것이 유지보수성이 더 높음
const LogContext = createContext();

export function LogContextProvider({ children }) {
  const [text, setText] = useState("");
  return (
    <LogContext.Provider value={{ text, setText }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
