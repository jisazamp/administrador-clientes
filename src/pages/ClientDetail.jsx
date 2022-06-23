import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/spinner.css';

const ClientDetail = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:4000/clients/${id}`);

        if (response.status === 404) {
          setClient({});
          return;
        }

        const data = await response.json();
        setClient(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClientDetail();
  }, []);

  return (
    <div className='flex flex-col items-center md:items-start'>
      {loading && Object.keys(client).length > 0 && (
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      )}

      {Object.keys(client).length === 0 && <p>No hay resultados</p>}

      {!loading && Object.keys(client).length > 0 && (
        <div className='items-start'>
          <button
            onClick={() => navigate('/clients')}
            className='mb-6 uppercase font-semibold py-3 bg-gray-300 px-3 rounded-md text-gray-700 hover:bg-gray-400 hover:text-gray-100
            transition duration-200 ease text-md'
          >
            Volver a clientes
          </button>
          <h1 className=' font-black text-4xl text-[#3829e0]'>
            Ver cliente: {client.username}
          </h1>
          <p className='mt-3'>Información del cliente</p>

          <p className='mt-6 text-lg'>
            <span className='uppercase font-semibold text-xl'>Cliente:</span>{' '}
            {client.username}
          </p>

          <p className='mt-2 text-lg'>
            <span className='uppercase font-semibold text-xl'>Empresa:</span>{' '}
            {client.company}
          </p>

          <p className='mt-2 text-lg'>
            <span className='uppercase font-semibold text-xl'>Teléfono:</span>{' '}
            {client.phone}
          </p>

          <p className='mt-2 text-lg'>
            <span className='uppercase font-semibold text-xl'>Email:</span>{' '}
            {client.email}
          </p>

          <p className='mt-2 text-lg'>
            <span className='uppercase font-semibold text-xl'>Notas:</span>{' '}
            {client.notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default ClientDetail;
