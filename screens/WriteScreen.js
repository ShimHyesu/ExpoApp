import React, { useState, useContext } from "react";
// 화면에서 기본적으로 보여지는 줄 수 초과할 경우
// 안드로이드는 별 문제x, iOS는 하단 내용 잘리게 됨 -> KeyboardAvoidingView 적용
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import WriteHeader from "../components/WriteHeader";
import WriteEditor from "../components/WriteEditor";
import LogContext from "../contexts/LogContext";

function WriteScreen() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigation = useNavigation();

  const { onCreate } = useContext(LogContext);

  const onSave = () => {
    onCreate({ title, body, date: new Date().toISOString() });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "white",
    //SafeAreaView 적용 안될때 사용
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  avoidingView: {
    flex: 1,
  },
});
