import React, { useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";

function WriteEditor({ title, body, onChangeTitle, onChangeBody }) {
  const bodyRef = useRef();

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        //엔터 버튼이 완료대신 다음으로 뜸
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="당신의 오늘을 기록해보세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        // TextInput의 Props로 지정해주면 원하는 컴포넌트의 레퍼런스 선택 가능
        ref={bodyRef}
      />
    </View>
  );
}

export default WriteEditor;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: "#263238",
    fontWeight: "bold",
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: "#263238",
  },
});
