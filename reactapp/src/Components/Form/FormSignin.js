import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import Navbar from "../Navbar";
import { Col, Row } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const FormSignin = () => {
    return(
        <>
        <Navbar />
        <div class="container text-center ">
        <h2 style={{display:'flex', marginTop:'10px'}}>Sign In</h2>
         <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 400,
      marginTop:30,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
    </Form.Item>
  </Form>
  <h2 style={{display:'flex'}}>Or Sign in with:</h2>
<Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div style={{ }}>
        <a class="icon-link p-left " href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1309030980%3A1690867039976283">
                            <button class="btn btn-danger"> <i class="fa fa-envelope" aria-hidden="true"></i> | Gmail</button>
                        </a>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={{}}>
           <a class="icon-link p-left " href="https://github.com/">
                            <button class="btn btn-dark"> <i class="fa fa-github" aria-hidden="true"></i>  Github</button>
                        </a>
        </div>
      </Col>
    </Row>
  </div>
        </>
    )
}

export default FormSignin;