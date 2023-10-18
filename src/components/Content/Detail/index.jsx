import React from "react";
import { Layout, theme } from "antd";
import Welcome from "./Welcome";

const { Content } = Layout;
function ContentDetail() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      className="text-center align-middle"
      style={{
        backgroundColor: colorBgContainer,
      }}
    >
      <Welcome />
    </Content>
  );
}

export default ContentDetail;
