//
// AsyncStorage로 데이터 유지하기
//
// @react-native-community/async-storage 패키지 @react-native-async-storage/async-storage로 이동
import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "logs";

const logsStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {
      throw new Error("Failed to load logs");
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error("Failed to save logs");
    }
  },
};

export default logsStorage;
