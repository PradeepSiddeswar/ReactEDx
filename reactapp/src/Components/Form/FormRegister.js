
import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Button, Checkbox, Form, Input } from 'antd';
import { Col, Row } from 'antd';

import Navbar from "../Navbar";
import { Select } from 'antd';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};


const FormRegister = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');



  
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <>
        <Navbar />
       
         <div class="container text-center ">
         <h2 style={{display:'flex', marginTop:'10px'}}>Register For Free</h2>
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
      marginTop:10,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Full Name"
      name="Full Name"
      rules={[
        {
          required: true,
          message: 'Please input your Full Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input />
    </Form.Item>
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
      label="Country"
      name="Country"
      rules={[
        {
          required: true,
        },
      ]}
    >
    <CountryDropdown
        // value={selectedCountry}
        onChange={(val) => setSelectedCountry(val)}
       style={{maxWidth:'260px'}}/>
      
      {selectedCountry && (
        <RegionDropdown
          country={selectedCountry}
          value={selectedRegion}
          onChange={(val) => setSelectedRegion(val)}
          />

      )}
    
    </Form.Item>
    
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>I Agree that edX</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" danger style={{display:'flex'}}>
        Create an account for free
      </Button>
    </Form.Item>
  </Form>
<h2 style={{display:'flex'}}>Or register with:</h2>
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

export default FormRegister;