"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Card, Button, Form, Input, Alert} from 'antd';


// Define the form values
interface RegisterFormValues {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}
const Register: React.FC = () => {
	const [serverError, setServerError] = useState<string | null>(null);
	const router = useRouter();

	const onFinish = async (values: RegisterFormValues) => {
		setServerError(null); 
	  
		try {
			const response = await fetch("http://localhost:5000/api/auth/register", {
				method: "POST",
				headers: {
				"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
		
			const data = await response.json();
		
			if (!response.ok) {
				throw new Error(data.message || "Đăng ký thất bại!");
			}
		
			router.push("../auth/login");

		} catch (error: unknown) {
			if (error instanceof Error) {
				setServerError(error.message); 
			} else {
				setServerError("Đã xảy ra lỗi không xác định!"); 
			}
		}
	};
	  
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="w-96">
				<Card title="Đăng kí">
					<Form
						name="register"
						initialValues={{ remember: true }}
						onFinish={onFinish}
						>

						<Form.Item
							name="username"
							rules={[{ required: true, message: 'Please input your Username!' }]}
						>
							<Input prefix={<UserOutlined />} placeholder="Username" />
						</Form.Item>

						<Form.Item
							name="email"
							rules={[
							{ required: true, message: 'Please input your Email!' },
							{ type: 'email', message: 'The input is not valid Email!' },
							]}
						>
							<Input prefix={<MailOutlined />} placeholder="Email" />
						</Form.Item>

						<Form.Item
							name="password"
							rules={[{ required: true, message: 'Please input your Password!' }]}
						>
							<Input prefix={<LockOutlined />} type="password" placeholder="Password" />
						</Form.Item>

						<Form.Item
							name="confirmPassword"
							dependencies={["password"]}
							rules={[
							{ required: true, message: 'Please confirm your Password!' },
							({ getFieldValue }) => ({
								validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(new Error('The two passwords do not match!'));
								},
							}),
							]}
						>
							<Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
						</Form.Item>
						
						{/* Hiển thị lỗi từ server nếu có */}
						{serverError && <Alert message={serverError} type="error" showIcon/>}

						<Form.Item>
							<Button block type="primary" htmlType="submit">Register</Button>
							or <a href="../auth/login">Login now!</a>
						</Form.Item>
					</Form>
				</Card>
			</div>
		</div>
		
	);
};

export default Register;