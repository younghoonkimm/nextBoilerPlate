import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { loginAction, logoutAction } from "./user";

// 커스텀 훅
export default function useUser() {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const login = useCallback(() => {
    dispatch(loginAction());
  }, []);

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return { isLoggedIn, login, logout };
}
