import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Login from "./components/Login";
import SidebarNavigation from "./components/SideBarNavigation";
import SidebarContent from "./components/Content/SidebarLeft";
import ContentDetail from "./components/Content/Detail";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <Layout style={{ height: "100vh" }}>
      <SidebarNavigation />
      <SidebarContent />
      <ContentDetail />
    </Layout>
  ) : (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
