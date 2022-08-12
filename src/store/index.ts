import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import rootReducer from "store/modules";

// const store = () => {
//   const store = configureStore({ reducer: rootReducer });
//   return store;
// };

const store = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });

const wrapper = createWrapper(store, {
  // 이 부분이 true면 디버그때 자세한 설명이 나옵니다. (개발할때는 true로)
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
