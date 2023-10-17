import React from "react";
import { Layout, theme } from "antd";
import { Route, Routes } from "react-router-dom";

const { Content } = Layout;
const contentStyle = {
  textAlign: "center",
  // minHeight: 120,
  lineHeight: "120px",
  // color: '#fff',
  // backgroundColor: '#108ee9',
};
function ContentDetail() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      style={{
        ...contentStyle,
        backgroundColor: colorBgContainer,
        padding: 24,
      }}
    >
      <p>Chat Detail</p>
    </Content>
  );
}

export default ContentDetail;
