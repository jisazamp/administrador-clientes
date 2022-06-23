import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Form from '../components/Form';

const EditClient = () => {
  const [client, setClient] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchClientDetail = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

        if (response.status === 404) {
          setClient({});
          return;
        }

        const data = await response.json();
        setClient(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClientDetail();
  }, []);

  return (
    <div>
      <h1 className=' font-black text-4xl text-[#3829e0]'>Editar cliente</h1>
      <p className='mt-3'>
        Utiliza este formulario para editar datos de un cliente
      </p>

      <Form client={client} />
    </div>
  );
};

export default EditClient;
