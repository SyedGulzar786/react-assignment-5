import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const SignupForm = ({ registerUser }) => (
  <Form
    name="signupForm"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ username: "Admin", remember: true }}
    onFinish={registerUser}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        { required: true, message: 'Please input your email!' },
        { pattern: "^[^\s@]+@[^\s@]+\.[^\s@]+$", message: 'Please enter a valid email address!' }
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default SignupForm;