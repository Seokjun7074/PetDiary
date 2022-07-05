import { useEffect } from "react";
import { LoginButtonContainer } from "./style";

const LoginButton = () => {
  //   console.log(process.env.REACT_APP_NAVER_CLIENT_ID);
  //   console.log(process.env.REACT_APP_REDIRECT_URI);
  const naverLogin = () => {
    const login = new window.naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: process.env.REACT_APP_REDIRECT_URI,
      isPopup: false,
      loginButton: { color: "green", type: 1, height: 20 },
      callbackHandle: true,
    });
    login.init();
  };
  useEffect(() => {
    naverLogin();
  }, []);
  return <LoginButtonContainer id="naverIdLogin" />;
};

export default LoginButton;
