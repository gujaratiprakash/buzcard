import React, { useState } from 'react';
import { Input, List, Button, Row, Col } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design CSS
import { CardNavbar } from './CardNavbar';
import { Link } from 'react-router-dom';
 // Import Tailwind CSS styles
import { EditOutlined } from '@ant-design/icons';

const data = [
    'Web Design',
    'Web Development',
    'Mobile App Development',
    'SEO',
    'Digital Marketing',
    'Graphic Design',
    'Content Writing',
    'Video Editing',
    'Logo Design',
  // Add more services as needed
];

export const Services = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(data);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSearch = (value) => {
    setSearchText(value);
    const filteredResults = data.filter(
      (service) =>
        service.toLowerCase().includes(value.toLowerCase()) &&
        !selectedServices.includes(service)
    );
    setSearchResults(filteredResults);
  };

  const handleSelectService = (service) => {
    setSelectedServices([...selectedServices, service]);
    handleSearch(''); // Clear the search text to remove the selected service from the search results
  };


  const handleRemoveService = (service) => {
    setSelectedServices(selectedServices.filter((s) => s !== service));
    };
    

  return (
    <>
        <Row>
        <CardNavbar />
            <Col span={17}>
            <div className="bg-white rounded m-2 p-2">
          
          <h1 className="text-2xl font-bold text-start">Services</h1>
          <h1 className="text-sm text-start">
            <Link to="/webcard/content">your actucall card link <EditOutlined /></Link>
          </h1>
          </div>
            <div className="p-4">
      <Input
        placeholder="Search for a service"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        className="mb-4"
      />
        <div className="w-full">
          <List
            header={<div>Suggested Services</div>}
            bordered
            dataSource={searchResults}
            renderItem={(item) => (
              <List.Item
                onClick={() => handleSelectService(item)}
                className="cursor-pointer"
              >
                {item}
              </List.Item>
            )}
          />
        </div>
        <div className="w-full">
          <h2 className="text-lg font-semibold">Selected Services</h2>
          {selectedServices.length === 0 ? (
            <p>No services selected</p>
          ) : (
            <ul>
              {selectedServices.map((service) => (
                <li key={service}>
                  {service}{' '}
                  <Button
                    type="link"
                    onClick={() => handleRemoveService(service)}
                    className="text-red-500"
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
    </div>
            </Col>
            <Col span={7}>
            {/* Peview of the card */}
            </Col>
        </Row>
    </>
  );
};

