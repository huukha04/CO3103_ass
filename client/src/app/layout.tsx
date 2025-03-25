"use client";
import "../styles/global.css";
import '@ant-design/v5-patch-for-react-19';

import { ReactNode, useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function RootLayout({ children }: { children: ReactNode }) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<html lang="en" suppressHydrationWarning>
			<body className="h-screen">
				{isMounted ? (
					<div>
						{children}
					</div>
				) : ( 
					<div className="w-full h-screen flex flex-col justify-center items-center space-y-4">
						<Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
						<p className="text-2xl font-bold text-blue-600 animate-pulse">Đang tải trang...</p>
					</div>

				)}
			</body>
		</html>

	);
}
