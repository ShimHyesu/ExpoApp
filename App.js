import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";
import LogContext from "./contexts/LogContext";

export default function App() {
  return (
    <NavigationContainer>
      {/* Provider에서 value라는 Props 설정 
      -> Context를 통해 여러 컴포넌트에서 공유 
      -> 이 컴포넌트 내부에 선언된 모든 컴포넌트에서 Context 값 사용 가능*/}
      <LogContext.Provider value="안녕하세요">
        <RootStack />
      </LogContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
