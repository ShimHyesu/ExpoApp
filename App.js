import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";
import { LogContextProvider } from "./contexts/LogContext";
import { SearchContextProvider } from "./contexts/SearchContext";

export default function App() {
  return (
    <NavigationContainer>
      {/* SearchContext는 LogContext와 의존관계가 아니기에 Provider 컴포넌트 사용순서 중요치 않음 */}
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
