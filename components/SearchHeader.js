import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchContext from "../contexts/SearchContext";

function SearchHeader() {
  // 헤더 위치가 ios(중앙), android(좌측) 다르게 나타남
  // -> 화면 크기를 가져온 다음 해당 값을 참고해 dp단위의 크기를 직접 설정해야함
  // dp 단위 가져오는 법1: Dimensions.get
  // dp 단위 가져오는 법2: useWindowDimensions Hook 사용
  const { width } = useWindowDimensions();

  const { keyword, onChangeText } = useContext(SearchContext);

  return (
    <View style={[styles.block, { width: width - 32, height: 24 }]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        // 자동으로 포커스 -> 화면 열자마자 키보드
        autoFocus
        value={keyword}
        onChangeText={onChangeText}
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
        onPress={() => onChangeText("")}
      >
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
}

export default SearchHeader;

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});
