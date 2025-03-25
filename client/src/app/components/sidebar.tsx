"use client";

import React from "react";
import { Button, Layout, Menu } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const Sidebar: React.FC<{
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  sidemenu: MenuProps["items"];
}> = ({ collapsed, setCollapsed, sidemenu }) => (
  !collapsed && (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical">
        <Button
          type="text"
          icon={<MenuFoldOutlined />}
          onClick={() => setCollapsed(true)}
          style={{ fontSize: "16px", width: 64, height: 64, color: "#fff" }}
        />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={sidemenu} />
    </Layout.Sider>
  )
);

export default Sidebar;
