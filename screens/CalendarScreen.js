import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated, Button } from "react-native";

function FadeInAndOut() {
  // 애니메이션 구현시 Animated 객체 사용
  // 특정 값을 컴포넌트 생성시에 설정하고 컴포넌트가 사라질때까지 재사용하고 싶은 경우
  // useRef 사용
  // <Animated.View>{{(속성값): animation}}</Animated.View> 과 같이 사용
  // animation값 변경할때 Animated.timing(animation,{...}).start() 함수 사용
  const animation = useRef(new Animated.Value(1)).current;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [hidden, animation]);

  return (
    <View>
      <Animated.View style={[styles.rectangular, { opacity: animation }]} />
      <Button
        title="Toggle"
        onPress={() => {
          setHidden(!hidden);
        }}
      />
    </View>
  );
}

//LogContext가 지닌 값 화면에 띄우기
function CalendarScreen() {
  return (
    <View style={styles.block}>
      <FadeInAndOut />
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
  rectangular: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
});
