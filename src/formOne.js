import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';


const FormOne = () => {

    return (
      <Formik
        initialValues={{
          firstname:'',
          lastname:'',
          email:'',
          country:'',
          state:'',
          zip:''
        }}
        validationSchema={Yup.object({
          firstname: Yup
          .string()
          .required('Sorry, this is required')
          .max(5,'Sorry the name is too long'),
          lastname: Yup
          .string()
          .required('Sorry, this is required'),

        })}
        onSubmit={( values )=>{
          console.log(values)
        }}
      >
        { ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <div className="container">
          <div className="col-md-12 mt-5">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-3">Personal information</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstname">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.firstname && touched.firstname ?
                  <span>{ errors.firstname }</span>
                :null}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastname">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.lastname && touched.lastname ?
                  <span>{ errors.lastname }</span>
                :null}
              </div>
            </div>

  
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </form>
          </div>
        </div>
        )}
      </Formik>



    );

}

export default FormOne;
