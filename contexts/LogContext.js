import { createContext } from "react";

//Context API: 리액트에 내장된 기능
//Props 사용하지 않아도 특정 값이 필요한 컴포넌트끼리 쉽게 값을 공유
//전역상태 관리에 사용

//새로운 Context만들때 createContext 함수 사용
// -> LogContext.Provider 컴포넌트와 LogContext.Consumer 컴포넌트 생성
// Provider은 Context 안에 있는 값을 사용할 컴포넌트들을 감싸주는 용도
const LogContext = createContext("안녕하세요");

export default LogContext;
