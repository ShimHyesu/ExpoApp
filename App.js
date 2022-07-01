import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";
import { LogContextProvider } from "./contexts/LogContext";

export default function App() {
  return (
    <NavigationContainer>
      {/* 기존 Context와 달리 객체 형태의 값을 받아왔기에 FeedsScreen 값 수정 필요 */}
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
