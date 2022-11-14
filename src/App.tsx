import React from "react";
import "./App.css";
import "@sendbird/uikit-react/dist/index.css";
import SendbirdApp from "@sendbird/uikit-react/App";

const APP_ID = String(process.env.REACT_APP_SENDBIRD_APP_KEY);
const USER_ID = "yw01124"; // 이메일

function App() {
  return (
    <div className="App">
      <SendbirdApp
        appId={APP_ID}
        userId={USER_ID}
        theme="light"
        showSearchIcon={true}
        disableUserProfile={true}
        nickname={"예르"}
      />{" "}
    </div>
  );
}

export default App;
