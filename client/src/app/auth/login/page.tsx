"use client";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex, Card, Alert } from 'antd';
import { useState } from 'react';

const Login: React.FC = () => {
    interface LoginFormValues {
        username: string;
        password: string;
    }

    const [serverError, setServerError] = useState<string | null>(null);

    const onFinish = async (values: LoginFormValues) => {
        setServerError(null); // Reset lỗi trước khi gửi request
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                sessionStorage.setItem("user", data.token);
                console.log("Đăng nhập thành công!", data);
                window.location.href = "/"; 
            } else {
                setServerError(data.message || "Đăng nhập thất bại!");
            }
        } catch (error) {
            setServerError("Lỗi kết nối đến server!");
            console.error("Lỗi kết nối:", error);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-96">
                <Card title="Đăng nhập">
                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập Username!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập Password!' }]}
                        >
                            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <a href="../auth/forgot">Quên mật khẩu?</a>
                            </Flex>
                        </Form.Item>

                        {serverError && <Alert message={serverError} type="error" showIcon className="mb-2" />}

                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Đăng nhập
                            </Button>
                            hoặc <a href="../auth/register">Đăng ký ngay!</a>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default Login;
