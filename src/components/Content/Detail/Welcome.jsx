import React from "react";
import { Carousel, Image, Typography } from "antd";
// import hehe from "../../../../public/message.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const { Title, Text } = Typography;

function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center h-3/4 p-4">
      <div>
        <Title level={3}>Chào mừng bạn đến với Chat App</Title>
        <Text>Ứng dụng trò chuyện trực tuyến miễn phí</Text>
      </div>

      <Image src="message.png" preview={false} width={320} />

    </div>
  );
}

export default Welcome;
