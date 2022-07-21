import React, { useState, useContext } from "react";
// 화면에서 기본적으로 보여지는 줄 수 초과할 경우
// 안드로이드는 별 문제x, iOS는 하단 내용 잘리게 됨 -> KeyboardAvoidingView 적용
import {
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import WriteHeader from "../components/WriteHeader";
import WriteEditor from "../components/WriteEditor";
import LogContext from "../contexts/LogContext";

// log 파라미터 인식하여 파라미터 주어졌을때 제목과 내용의 기본값 지정
function WriteScreen({ route }) {
  // ?. 문법: 옵셔널 체이닝
  // null이거나 undefined일 수 있는 객체의 프로퍼티 에러없이 접근 가능
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? "");
  const [body, setBody] = useState(log?.body ?? "");
  const navigation = useNavigation();
  // date 상태 관리
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());

  const { onCreate, onModify, onRemove } = useContext(LogContext);

  // onSave에서 수정하거나 새로 저장할때 date상태 사용하도록 변경
  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        title,
        body,
      });
    } else {
      onCreate({ title, body, date: date.toISOString() });
    }
    navigation.pop();
  };

  // 삭제하기 전 한번 더 물어보는 과정
  const onAskRemove = () => {
    Alert.alert(
      "삭제",
      "정말로 삭제하시겠어요?",
      [
        { text: "취소", style: "cancel" },
        {
          text: "삭제",
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* date와 onChangeDate를 Props로 넣어줌 */}
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}
        />
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
