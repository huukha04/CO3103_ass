"use client";

import React, { useState, useEffect } from "react"; 
import { Layout } from "antd";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Sidebar from "../components/sidebar";
import HeaderBar from "../components/header";

const { Content } = Layout;

const HomePage: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Kiểm tra sessionStorage khi component mount
	useEffect(() => {
		const token = sessionStorage.getItem("token");
		if (token) {
			setIsAuthenticated(true);
		}
	}, []);

	const sidemenu: MenuProps["items"] = [
		{ key: "1", icon: <UserOutlined />, label: "nav 1" },
		{ key: "2", icon: <VideoCameraOutlined />, label: "nav 2" },
		{ key: "3", icon: <UploadOutlined />, label: "nav 3" },
	];

	const handleLogout = () => {
		sessionStorage.removeItem("token"); // Xóa token khi đăng xuất
		setIsAuthenticated(false);
		window.location.reload(); // Reload lại trang sau khi đăng xuất
	};

	const dropdownMenu: MenuProps["items"] = isAuthenticated
		? [
			{ key: "1", label: <a href="#">1st menu item</a> },
			{ key: "2", label: <a href="#">2nd menu item</a> },
			{ key: "3", label: <a href="#">3rd menu item</a> },
			{ key: "logout", label: <a onClick={handleLogout}>Đăng xuất</a> },
		]
		: [
			{ key: "login", label: <a href="./auth/login">Đăng nhập</a> },
			{ key: "register", label: <a href="./auth/register">Đăng ký</a> },
		];

	return (
		<Layout className="w-full h-screen flex">
			{/* Sidebar */}
			<Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidemenu={sidemenu} />

			{/* Main Layout */}
			<Layout className="flex flex-col w-full">
				{/* Header */}
				<HeaderBar collapsed={collapsed} setCollapsed={setCollapsed} dropdownMenu={dropdownMenu} />

				{/* Content */}
				<Content className="m-6 p-6 min-h-[280px] bg-white rounded-lg shadow-md">
					{isAuthenticated ? "Chào mừng bạn trở lại!" : "Vui lòng đăng nhập hoặc đăng ký."}
				</Content>
			</Layout>
		</Layout>
	);
};

export default HomePage;
