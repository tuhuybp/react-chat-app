import React from "react";
import { Layout, Space, Tooltip } from "antd";
import {
  MessageOutlined,
  ContactsOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function SidebarNavigation() {
  return (
    <Sider
      style={{
        textAlign: "center",
        lineHeight: "120px",
      }}
      width={64}
    >
      <Space
        direction="vertical"
        size="small"
        style={{
          display: "flex",
          padding: "16px 8px 16px 8px",
        }}
      >
        <Tooltip title="Tin nhắn" placement="top">
          {/* <Button
            // type="primary"
            icon={<MessageOutlined style={{ fontSize: 24 }} />}
          /> */}
          <MessageOutlined
            style={{ fontSize: 24, color: "white", cursor: "pointer" }}
          />
        </Tooltip>

        <Tooltip title="Danh bạ" placement="top">
          <ContactsOutlined
            style={{ fontSize: 24, color: "white", cursor: "pointer" }}
          />
        </Tooltip>

        <Tooltip title="Thông báo" placement="top">
          <BellOutlined
            style={{ fontSize: 24, color: "white", cursor: "pointer" }}
          />
        </Tooltip>

        <Tooltip title="Cài đặt" placement="top">
          <SettingOutlined
            style={{ fontSize: 24, color: "white", cursor: "pointer" }}
          />
        </Tooltip>
      </Space>
    </Sider>
  );
}

export default SidebarNavigation;
