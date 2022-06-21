import Form from '../components/Form';

const NewClient = () => {
  return (
    <>
      <h1 className=' font-black text-4xl text-[#3829e0]'>Nuevo Cliente</h1>
      <p className='mt-3'>
        Diligencie los siguientes campos para registrar un nuevo cliente
      </p>
      <Form />
    </>
  );
};

export default NewClient;
