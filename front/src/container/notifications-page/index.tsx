import "./index.scss"
import "../../style/page.scss"

import StatusBarDark from "../../component/status-bar-dark";
import Header from "../../component/header";
import NoticeItem from "../../component/notice-item"
import Page from "../../component/page";

const Component = () => {
 
  return (
    <Page>
      <div className="page_style_gray">
        <StatusBarDark />
        <Header title="Notifications"/>
        <NoticeItem />
      </div>
    </Page>
  )
};

export default Component;