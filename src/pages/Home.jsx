import { useState, useEffect } from 'react';
import Client from '../components/Client';

const Home = () => {
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredClients, setFilteredClients] = useState([]);
  const [editClient, setEditClient] = useState({});

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

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    // Case insensitive regular expression to look for name
    const regex = new RegExp(filter, 'i');

    // Create a new array with the filtered clients
    const newClients = clients.filter(
      (client) => client.username.search(regex) >= 0
    );

    if (newClients.length === 0) {
      setFilteredClients([]);
      return;
    }

    setFilteredClients(newClients);
  }, [filter]);

  const handleFilterChange = async (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1 className=' font-black text-4xl text-[#3829e0]'>Clientes</h1>
      <p className='mt-3'>Gestione y administre sus clientes</p>

      <form className='mt-2 mb-2 flex flex-col items-center gap-2 justify-center'>
        {/* Filter search box */}
        <input
          className='py-2 px-2 w-full md:w-2/3 mt-3 border-gray-500 border-2'
          type='text'
          value={filter}
          onChange={handleFilterChange}
          id='searchUsername'
          placeholder='Buscar por nombres...'
        />

        {/* Reset filters button */}
        <button
          className={`${
            filter ? 'block' : 'hidden'
          } mb-2 mt-2 py-2 bg-sky-600 uppercase font-semibold 
          text-white md:hover:bg-sky-700 transition duration-200 w-full md:w-2/3 rounded-sm`}
          onClick={(e) => {
            e.preventDefault();
            setFilter('');
            setFilteredClients([]);
          }}
        >
          Borrar filtros
        </button>
      </form>

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
          {filter
            ? filteredClients.map((c) => (
                <Client
                  key={c.id}
                  client={c}
                  clients={clients}
                  setClients={setClients}
                  setEditClient={setEditClient}
                />
              ))
            : clients.map((c) => (
                <Client
                  key={c.id}
                  client={c}
                  clients={clients}
                  setClients={setClients}
                  setEditClient={setEditClient}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
