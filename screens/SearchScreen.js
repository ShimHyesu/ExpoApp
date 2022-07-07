import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchContext from "../contexts/SearchContext";

function SearchScreen() {
  const { keyword, onChangeText } = useContext(SearchContext);

  return (
    <View style={styles.block}>
      <Text>{keyword}</Text>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  block: {},
});
