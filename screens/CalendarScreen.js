import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated, Button } from "react-native";

function SlideLeftAndRight() {
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangular,
          {
            transform: [
              {
                // interpolate로 여러 스타일 적용
                // Value가 지닌 값이 0일때 0, 1일때 150으로 지정
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button
        title="Toggle"
        onPress={() => {
          setEnabled(!enabled);
        }}
      />
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <SlideLeftAndRight />
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
