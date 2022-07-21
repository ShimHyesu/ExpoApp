import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { format } from "date-fns";
import { ko } from "date-fns/locale";

import TransparentCircleButton from "./TransparentCircleButton";

// WriteHeader에서 Props로 받아온 date 보여주도록 수정 -> 컴포넌트 중앙에 위치
function WriteHeader({ onSave, onAskRemove, isEditing, date, onChangeDate }) {
  const navigation = useNavigation();

  // DateTimePickerModal의 모드 상태관리 -> date, time, datetime
  const [mode, setMode] = useState("date");
  const [isVisible, setIsVisible] = useState(false);

  //뒤로가기 버튼
  const onGoBack = () => {
    navigation.pop();
  };

  // 날짜 눌렀을때 date모드
  const onPressDate = () => {
    setMode("date");
    setIsVisible(true);
  };

  // 시간 눌렀을때 time모드
  const onPressTime = () => {
    setMode("time");
    setIsVisible(true);
  };

  // 날짜 선택했을때 호출되는 함수
  const onConfirm = (selectedDate) => {
    setIsVisible(false);
    onChangeDate(selectedDate);
  };

  // 날짜 선택 취소했을때 호출되는 함수
  const onCancel = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.block}>
      {/* 뒤로가기 버튼 */}
      <TransparentCircleButton
        onPress={onGoBack}
        name="arrow-back"
        color="#424242"
      />

      {/* 날짜 및 시간 */}
      <View style={styles.center}>
        <Pressable onPress={onPressDate}>
          <Text>{format(new Date(date), "PPP", { locale: ko })}</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={onPressTime}>
          <Text>{format(new Date(date), "p", { locale: ko })}</Text>
        </Pressable>
      </View>
      {/* 날짜와 시간 선택할 수 있는 모달 */}
      <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
        date={date}
      />

      {/* 삭제버튼 */}
      <View style={styles.buttons}>
        {/* isEditing Props가 true일 때만 삭제버튼 보여주고 이 버튼 눌렀을때 onAskRemove 호출 */}
        {isEditing && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onAskRemove}
          />
        )}

        {/* 등록버튼 */}
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
    </View>
  );
}

export default WriteHeader;

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  center: {
    // position: 'absolute' 하고 left, right, top, bottom 모두 0 -> 상위 컴포넌트 크기만큼 꽉 채운다
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    // zIndex: 컴포넌트가 다른 컴포넌트와 위치가 중첩될 때 앞 레이어 나타날지, 뒤 레이어에 나타날지 결정
    zIndex: -1,
    flexDirection: "row",
  },

  separator: {
    width: 8,
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
