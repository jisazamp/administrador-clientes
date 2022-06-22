import { useState, useEffect } from 'react';
import Client from '../components/Client';

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const url = 'http://localhost:4000/clients';
        const response = await fetch(url);
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClients();
  }, []);

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

  return <div></div>;
};

export default Home;
