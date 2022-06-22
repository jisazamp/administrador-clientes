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

  return (
    <div>
      <h1 className=' font-black text-4xl text-[#3829e0]'>Clientes</h1>
      <p className='mt-3'>Gestione y administre sus clientes</p>
      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='text-white bg-blue-900'>
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Contacto</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
