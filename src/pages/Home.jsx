import { useState, useEffect } from 'react';
import Client from '../components/Client';

const Home = () => {
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState('');

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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    const newClients = clients.filter(
      (client) => client.username.toLowerCase() === filter.toLowerCase()
    );

    if (!filter) {
      fetchClients();
      return;
    }

    setClients(newClients);
  };

  return (
    <div>
      <h1 className=' font-black text-4xl text-[#3829e0]'>Clientes</h1>
      <p className='mt-3'>Gestione y administre sus clientes</p>

      <form
        className='mt-2 mb-2 flex gap-2 justify-center'
        onSubmit={handleFilterSubmit}
      >
        <input
          className='py-2 px-2 w-2/3'
          type='text'
          value={filter}
          onChange={handleFilterChange}
          id='searchUsername'
          placeholder='Buscar usuario'
        />
        <button
          className='py-3 px-5 rounded-sm bg-black text-white flex justify-center'
          type='submit'
          value='Buscar'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
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
          {clients.map((client) => (
            <Client key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
