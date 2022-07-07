import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import TransparentCircleButton from "./TransparentCircleButton";

function WriteHeader({ onSave, onAskRemove, isEditing }) {
  const navigation = useNavigation();

  //뒤로가기 버튼
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <TransparentCircleButton
        onPress={onGoBack}
        name="arrow-back"
        color="#424242"
      />

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
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
