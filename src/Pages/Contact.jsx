import React from 'react';
import { Form, Input, Button } from 'antd';

function Contact() {
  const onFinish = (values) => {
    // Handle form submission here
    console.log('Received values:', values);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-start">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          name="contact-form"
          onFinish={onFinish}
          className="space-y-4"
          action="#"
          method="POST"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </Form.Item>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email address' },
                  { type: 'email', message: 'Please enter a valid email address' },
                ]}
              >
                <Input
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </Form.Item>
            </div>
          </div>

          <div>
            <div className="relative">
              <label>
                <span className="block text-sm font-medium leading-6 text-gray-700">Mobile Number</span>
              </label>
              <div className="mt-2 relative rounded-md shadow-sm">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  +1 {/* Country Code */}
                </span>
                <Form.Item
                  name="mobile"
                  rules={[
                    { required: true, message: 'Please enter your mobile number' },
                  ]}
                >
                  <Input
                    id="mobile"
                    autoComplete="tel"
                    className="block w-full pl-10 pr-4 py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none sm:text-sm"
                    placeholder="Mobile Number"
                  />
                </Form.Item>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2">
              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea
                  id="message"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  rows={5}
                />
              </Form.Item>
            </div>
          </div>

          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="m-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
