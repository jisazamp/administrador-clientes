import { Formik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';

const Form = () => {
  const newClientSchema = Yup.object().shape({
    
  })

  return (
    <div className='mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
        Agregar cliente
      </h1>
      <Formik
        initialValues={{
          username: '',
          company: '',
          email: '',
          phone: '',
          notes: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <FormikForm>
            <div className='mt-4'>
              <label htmlFor='username' className='input-label'>
                Nombre:
              </label>
              <Field
                type='text'
                placeholder='John Doe'
                id='username'
                name='username'
                className='input-field'
              />
            </div>

            <div className='mt-4'>
              <label htmlFor='company' className='input-label'>
                Empresa:
              </label>
              <Field
                type='text'
                placeholder='Universidad Pontificia Bolivariana'
                id='company'
                name='company'
                className='input-field'
              />
            </div>

            <div className='mt-4'>
              <label htmlFor='email' className='input-label'>
                E-mail:
              </label>
              <Field
                type='email'
                placeholder='john@upb.edu.co'
                id='email'
                name='email'
                className='input-field'
              />
            </div>

            <div className='mt-4'>
              <label htmlFor='phone' className='input-label'>
                Telefóno:
              </label>
              <Field
                type='tel'
                placeholder='John Doe'
                id='phone'
                name='phone'
                className='input-field'
              />
            </div>

            <div className='mt-4'>
              <label htmlFor='notes' className='input-label'>
                Notas:
              </label>
              <Field
                as='textarea'
                type='text'
                placeholder='John Doe'
                id='notes'
                name='notes'
                className='input-field'
              />
            </div>

            <input
              className='bg-sky-600 w-full mt-10 mb-3 py-2 rounded-sm text-white uppercase font-semibold hover:bg-sky-700 transition duration-200 ease-in
            cursor-pointer'
              type='submit'
              value='Agregar'
            />
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;
