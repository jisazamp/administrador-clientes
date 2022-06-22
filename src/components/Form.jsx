import { Formik, Form as FormikForm, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Error from './Error';

const Form = () => {
  const navigate = useNavigate();

  const newClientSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'El nombre es muy corto')
      .max(20, 'El nombre es muy largo')
      .required('El nombre del cliente es obligatorio'),
    email: Yup.string()
      .email('Ingrese una dirección de mail válida')
      .required('El email del cliente es obligatorio'),
    phone: Yup.number()
      .integer('Número no válido')
      .positive('Número no válido')
      .required('El número de contacto del cliente es obligatorio')
      .typeError('Ingrese un número de contacto válido'),
  });

  const handleClientSubmit = async (values, resetForm) => {
    const url = 'http://localhost:4000/clients';
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      resetForm();
      navigate('/clients');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-10 px-5 py-10 rounded-md shadow-lg border md:w-3/4 mx-auto'>
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
        onSubmit={(values, { resetForm }) =>
          handleClientSubmit(values, resetForm)
        }
        validationSchema={newClientSchema}
      >
        {({ errors, touched, values }) => {
          return (
            <FormikForm>
              <div className='mt-4'>
                <label
                  htmlFor='username'
                  className={`input-label ${
                    errors.username &&
                    touched.username &&
                    'text-red-500 font-semibold'
                  }`}
                >
                  Nombre: *
                </label>
                <Field
                  type='text'
                  placeholder='John Doe'
                  id='username'
                  name='username'
                  className={`input-field ${
                    errors.username &&
                    touched.username &&
                    'border-2 border-red-500 placeholder-red-500'
                  }`}
                />

                {errors.username && touched.username && (
                  <Error msg={errors.username} />
                )}
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
                <label
                  htmlFor='email'
                  className={`input-label ${
                    errors.email &&
                    touched.email &&
                    'text-red-500 font-semibold'
                  }`}
                >
                  E-mail: *
                </label>
                <Field
                  type='email'
                  placeholder='john@upb.edu.co'
                  id='email'
                  name='email'
                  className={`input-field ${
                    errors.email &&
                    touched.email &&
                    'border-2 border-red-500 placeholder-red-500'
                  }`}
                />

                {errors.email && touched.email && <Error msg={errors.email} />}
              </div>

              <div className='mt-4'>
                <label
                  htmlFor='phone'
                  className={`input-label ${
                    errors.phone &&
                    touched.phone &&
                    'text-red-500 font-semibold'
                  }`}
                >
                  Telefóno: *
                </label>
                <Field
                  type='tel'
                  placeholder='1223334444'
                  id='phone'
                  name='phone'
                  className={`input-field ${
                    errors.phone &&
                    touched.phone &&
                    'border-2 border-red-500 placeholder-red-500'
                  }`}
                />

                {errors.phone && touched.phone && <Error msg={errors.phone} />}
              </div>

              <div className='mt-4'>
                <label htmlFor='notes' className='input-label'>
                  Notas:
                </label>
                <Field
                  as='textarea'
                  type='text'
                  placeholder='Notas adicionales que quiera registrar'
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
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
