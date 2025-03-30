"use client";

import React from "react";
import { Button, Layout, Dropdown, theme } from "antd";
import { MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const HeaderBar: React.FC<{
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  dropdownMenu: MenuProps["items"];
}> = ({ collapsed, setCollapsed, dropdownMenu }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{
        padding: "0 16px",
        background: colorBgContainer,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {collapsed && (
        <Button
          type="text"
          icon={<MenuUnfoldOutlined />}
          onClick={() => setCollapsed(false)}
          style={{ fontSize: "16px", width: 64, height: 64 }}
        />
      )}
      <Dropdown menu={{ items: dropdownMenu }} placement="bottomRight" arrow>
        <UserOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
      </Dropdown>
    </Layout.Header>
  );
};

export default HeaderBar;
