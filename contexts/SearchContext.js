import React, { createContext, useState } from "react";

// 검색어 상태 관리
const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [keyword, onChangeText] = useState("");

  return (
    <SearchContext.Provider value={{ keyword, onChangeText }}>
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
