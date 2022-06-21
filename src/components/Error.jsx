import PropTypes from 'prop-types';

const Error = ({ msg }) => {
  return (
    <div className='py-2 md:w-3/5 mx-auto bg-red-700 mt-2 px-2 text-center text-white font-semibold'>
      {msg}
    </div>
  );
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
