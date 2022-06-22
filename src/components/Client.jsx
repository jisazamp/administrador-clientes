import PropTypes from 'prop-types';

const Client = ({ client }) => {
  const { username, company, email, phone, notes, id } = client;

  return (
    <tr className='border-b hover:bg-gray-100 transition duration-200 cursor-pointer'>
      <td className='p-3'>{username}</td>
      <td className='p-3'>
        <p>
          <span className='text-gray-800 uppercase font-bold'>Email</span>{' '}
          {email}
        </p>
        <p>
          <span className='text-gray-800 uppercase font-bold'>Tel</span> {phone}
        </p>
      </td>
      <td className='p-3'>{company}</td>
      <td className='p-3 flex flex-col gap-1'>
        <button className='flex justify-center text-[#073b4c] px-2 items-center gap-2 bg-[#ffd166] md:hover:bg-[#d3ab4f] transition all duration-300 ease rounded-sm py-2'>
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
              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
            />
          </svg>
          <span className='hidden uppercase md:inline-block'>Ver</span>
        </button>
        <button className='flex justify-center text-[#073b4c] px-2 items-center gap-2 bg-[#06d6a0] md:hover:bg-[#3e8b41] transition all duration-300 ease rounded-sm py-2'>
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
              d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
            />
          </svg>
          <span className='hidden uppercase md:inline-block'>Editar</span>
        </button>
        <button className='flex justify-center text-[#073b4c] px-2 items-center gap-2 bg-[#ef476f] hover:bg-[#9c0a02] transition duration-300 ease rounded-sm py-2'>
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
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
          <span className='hidden uppercase md:inline-block'>Eliminar</span>
        </button>
      </td>
    </tr>
  );
};

Client.propTypes = {
  client: PropTypes.object.isRequired,
};

export default Client;
