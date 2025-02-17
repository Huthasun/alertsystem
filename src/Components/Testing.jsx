import React, { useEffect, useState,useRef } from 'react';
import mqtt from 'mqtt';
import { Image } from '@mantine/core';
import Ams from '../assets/Qr_code_AMS.png';

const Testing = () => {
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const [key1, setKey1] = useState('');
  const [key2, setKey2] = useState('');
  const [key3, setKey3] = useState('');

  const key1Ref = useRef('');
  const key2Ref = useRef('');
  const key3Ref = useRef('');


  useEffect(() => {
    // Connect to MQTT broker
    const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt'); // Use WSS for WebSocket Secure

    client.on('connect', () => {
      console.log('Connected to MQTT Broker');
      client.subscribe('React'); // Subscribe to your topic
    });

    client.on('message', (topic, message) => {
      console.log(`Received message: ${message.toString()} on topic: ${topic}`);
      try {
        const data = JSON.parse(message.toString());
        console.log("");
        
        if (data) {
          key1Ref.current = data.name;
          setKey1(data.name);
          key2Ref.current = data.tag_id;
          setKey2(data.tag_id);
          key3Ref.current = data.location;
          setKey3(data.location);
        }
      } catch (error) {
        console.error('Invalid JSON data:', error);
      }
    
    });

    return () => {
      client.end(); // Clean up connection on unmount
    };
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">MQTT Data Display</h1>
      <div className="bg-white shadow-md rounded p-4">
        <p className="text-lg">Name</p>
        <p className="font-mono text-blue-600 text-xl mt-2">{key1Ref.current}</p>

        <p className="text-lg mt-4">Tag_Id</p>
        <p className="font-mono text-green-600 text-xl mt-2">{key2Ref.current }</p>
        <p className="text-lg mt-4">Location</p>
        <p className="font-mono text-green-600 text-xl mt-2">{key3Ref.current }</p>

        <Image maw={100} src={Ams} alt='logo'  />
      </div>
    </div>
  );
};

export default Testing;
