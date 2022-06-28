import React from "react";
import { Text, View } from "react-native";
//react-native의 SafeAreaView 컴포넌트는 상단과 하단에 여백을 설정해 안전한 영역에만 UI콘텐츠 보이도록 제한
//react-native-safe-area-context: 특정부분 여백 비활성화
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      {/*
      edges Props: safeArea 적용할 모서리 
      겹쳐진 영역 수정하려면 Status 높이와 일치하는 빈View 보여주면 됨
      StatusBar의 높이 -> useSafeAreaInsets Hook함수
      */}
      <SafeAreaView edges={["bottom"]}>
        <Text>안녕</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
