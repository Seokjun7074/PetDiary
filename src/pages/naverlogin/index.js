import { useEffect } from "react";

function NaverLogin() {
  // const naverLogin = () => {
  //   const login = new window.naver.LoginWithNaverId({
  //     clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
  //     callbackUrl: process.env.REACT_APP_REDIRECT_URI,
  //     isPopup: true,
  //     loginButton: { color: "green", type: 1, height: 200 },
  //     callbackHandle: true,
  //   });
  //   login.init();
  // };
  // useEffect(() => {
  //   naverLogin();
  // }, []);
  return (
    <div>
      <h1>네이버 로그인 성공한건가??</h1>
      {/* <div id="naverIdLogin" /> */}
    </div>
  );
}

export default NaverLogin;
