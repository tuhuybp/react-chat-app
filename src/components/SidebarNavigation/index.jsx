import React, { useState } from "react";
import { Avatar, Layout, Space, Tooltip } from "antd";
import {
  MessageOutlined,
  ContactsOutlined,
  SettingOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function SidebarNavigation() {
  const [iconActive, setIconActive] = useState(0);

  const onClickIcon = (index) => {
    setIconActive(index);
  };

  return (
    <Sider
      style={{
        textAlign: "center",
        backgroundColor: "white",
        borderRight: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      width={64}
    >
      <Space
        direction="vertical"
        size="small"
        className="h-screen w-full justify-between px-2 py-4"
      >
        {/* top */}
        <div>
          <Tooltip title="Tin nhắn" placement="right">
            <MessageOutlined
              className={iconActive === 0 ? "bg-blue-100" : "hover:bg-gray-200"}
              style={{
                fontSize: 24,
                cursor: "pointer",
                padding: 8,
                borderRadius: 8,
              }}
              onClick={() => onClickIcon(0)}
            />
          </Tooltip>

          <Tooltip title="Danh bạ" placement="right">
            <ContactsOutlined
              className={iconActive === 1 ? "bg-blue-100" : "hover:bg-gray-200"}
              style={{
                fontSize: 24,
                cursor: "pointer",
                padding: 8,
                borderRadius: 8,
              }}
              onClick={() => onClickIcon(1)}
            />
          </Tooltip>

          <Tooltip title="Thông báo" placement="right">
            <BellOutlined
              className={iconActive === 2 ? "bg-blue-100" : "hover:bg-gray-200"}
              style={{
                fontSize: 24,
                cursor: "pointer",
                padding: 8,
                borderRadius: 8,
              }}
              onClick={() => onClickIcon(2)}
            />
          </Tooltip>

          <Tooltip title="Cài đặt" placement="right">
            <SettingOutlined
              className={iconActive === 3 ? "bg-blue-100" : "hover:bg-gray-200"}
              style={{
                fontSize: 24,
                cursor: "pointer",
                padding: 8,
                borderRadius: 8,
              }}
              onClick={() => onClickIcon(3)}
            />
          </Tooltip>
        </div>

        {/* bottom */}
        <div>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/329025536_1348216309266617_8154821189769939372_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ndzSyxHAjCgAX8MqeOQ&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDfG0yPiwj6TwoMscDZvv3JSf3nEmGYUhJhqXOXAvBM8Q&oe=65360352"
            className="hover:shadow-lg hover:bg-gray-200"
            onClick={() => {}}
          />
        </div>
      </Space>
    </Sider>
  );
}

export default SidebarNavigation;
