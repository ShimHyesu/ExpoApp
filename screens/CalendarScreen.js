import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated, Button } from "react-native";

function SlideLeftAndRight() {
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 150 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[styles.rectangular, { transform: [{ translateX: animation }] }]}
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
