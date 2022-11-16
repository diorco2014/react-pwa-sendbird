import React, { ChangeEvent, useState } from "react";
import "./App.css";
import "@sendbird/uikit-react/dist/index.css";
import SendbirdApp from "@sendbird/uikit-react/App";

const APP_ID = String(process.env.REACT_APP_SENDBIRD_APP_KEY);
// const USER_ID = "yw01124"; // 이메일

function App() {
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  const [show, setShow] = useState(false);

  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    sessionStorage.setItem("userId", id);
  };

  const handleNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const nick = e.target.value;
    sessionStorage.setItem("nickname", nick);
  };
  const handleShow = () => {
    const id = sessionStorage.getItem("userId");
    const nick = sessionStorage.getItem("nickname");
    console.log(id);
    if (id !== "") {
      setUserId(String(id));
      setNickname(String(nick));
      setShow(true);
    } else {
      alert("아이디를 입력해주세요");
    }
  };
  return (
    <div className="App">
      {!show && (
        <div className="box">
          <label className="label" htmlFor="id">
            ID
          </label>
          <input type="text" className="input" onChange={handleId} id="id" />
          <label className="label" htmlFor="nickname">
            NICKNAME
          </label>
          <input
            type="text"
            className="input"
            onChange={handleNickname}
            id="nickname"
          />
          <button onClick={handleShow}>입장하기</button>
        </div>
      )}
      {show && (
        <div className="chatbox">
          <SendbirdApp
            appId={APP_ID}
            userId={userId}
            theme="light"
            showSearchIcon={true}
            disableUserProfile={true}
            nickname={nickname}
            stringSet={{
              CHANNEL_LIST__TITLE: "Channel List",
              MESSAGE_INPUT__PLACE_HOLDER: "메시지 보내볼까요?",
              MESSAGE_INPUT__PLACE_HOLDER__DISABLED: "입력이 불가능 합니다",
              MESSAGE_INPUT__PLACE_HOLDER__MUTED: "음소거 되었습니다",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
