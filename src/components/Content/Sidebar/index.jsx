import React, { useEffect, useState } from "react";
import { Avatar, Layout, List, Typography, Input, Space } from "antd";
import "./index.css";
// import {} from "@ant-design/icons";

const { Sider } = Layout;
const { Title } = Typography;
const { Search } = Input;
//#ffe3e3
function SidebarContent() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [messageActiveIndex, setMessageActiveIndex] = useState(0);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  /**
   * Hàm xử lý khi nhấn chọn tin nhắn
   * @param {Object} message dữ liệu của tin nhắn
   * @param {Number} index vị trí của tin nhắn trong mảng
   * @author Huy
   */
  const onClickMessage = (message, index) => {
    console.log("message", message);
    setMessageActiveIndex(index);
  };

  return (
    <Sider
      className="pt-4 pb-2 h-screen "
      style={{
        backgroundColor: "#fff",
        borderRight: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      width={360}
    >
      <Space
        className="topSidebar"
        direction="vertical"
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          marginBottom: 16,
          width: "100%",
        }}
      >
        <Title level={3} style={{ margin: 0 }}>
          Chat
        </Title>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{}}
        />
      </Space>

      <List
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            className={
              messageActiveIndex === index
                ? "ant-list-item-active cursor-pointer"
                : "cursor-pointer hover:bg-gray-200"
            }
            id={item.email}
            key={item.email}
            style={{
              borderBottom: 0,
              padding: 8,
              borderRadius: 8,
              marginRight: 8,
              marginLeft: 8,
            }}
            onClick={() => onClickMessage(item, index)}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} size={56} />}
              title={item.name.last}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
        style={{
          overflow: "auto",
          height: "calc(100vh - 104px)",
          paddingBottom: 16,
        }}
      />
    </Sider>
  );
}

export default SidebarContent;
