import React, { useEffect, useRef } from "react";
import { Platform, Pressable, StyleSheet, View, Animated } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

function FloatingWriteButton({ hidden }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Write");
  };

  const animation = useRef(new Animated.Value(0)).current;

  // Animated.spring 함수: 값이 스프링처럼 통통 튀는 효과
  // tension/friction , speed/bounciness 조합으로 사용
  useEffect(() => {
    Animated.spring(animation, {
      toValue: hidden ? 1 : 0,
      useNativeDriver: true,
      // 강도(기본값 40)
      tension: 45,
      // 감속(기본값 7)
      friction: 5,
    }).start();
  }, [animation, hidden]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 88],
              }),
            },
          ],
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          Platform.OS === "ios" && { opacity: pressed ? 0.6 : 1 },
        ]}
        android_ripple={{ color: "white" }}
        onPress={onPress}
      >
        <Icon name="add" size={24} style={styles.Icon} />
      </Pressable>
    </Animated.View>
  );
}

export default FloatingWriteButton;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    //iOS 전용 그림자 설정
    shadowColor: "#4d4d4d",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    //안드로이드 전용 그림자 설정
    elevation: 5,
    //iOS에서는 overflow가 hidden일 경우 그림자가 보여지지 않음
    overflow: Platform.select({ android: "hidden" }),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#009688",
    justifyContent: "center",
    alignItems: "center",
  },
  Icon: {
    color: "white",
  },
});
