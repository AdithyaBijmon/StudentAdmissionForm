import React from 'react'
import Paper from '@mui/material/Paper';
import './App.css'
import { Form, Formik, useFormik } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { registerSchema } from './registrationSchema';
import Swal from 'sweetalert2';

const subjects = ['Select', 'Biology', 'Computer Science', 'Commerce', 'Humanities']

function RegistrationForm() {

    const { values, handleSubmit, handleChange, errors, touched, handleBlur, resetForm, isValid, dirty } = useFormik({
        initialValues: {
            name: '',
            email: '',
            dob: '',
            mobile: '',
            gender: '',
            subject: '',
            address: ''
        },
        validationSchema: registerSchema,
        validateOnBlur: true,

        // This is your onSubmit function
        onSubmit: (values, action) => {

            const htmlContent = `
    <p>
      <span style="font-weight:bold;">Name:</span> <span style="color: rgb(177, 142, 30); font-weight: 500;">${values.name}</span><br>
      <span style="font-weight:bold;">Email:</span>  <span style="color: rgb(177, 142, 30); font-weight: 500;">${values.email}</span><br>
      <span style="font-weight:bold;">DOB:</span> <span style="color: rgb(177, 142, 30); font-weight: 500;">${values.dob}</span><br>
            <span style="font-weight:bold;">DOB:</span> <span style="color: rgb(177, 142, 30); font-weight: 500;">${values.mobile}</span><br>

      <span style="font-weight:bold;">Gender:</span>  <span style="color: rgb(177, 142, 30); font-weight: 500;">${values.gender}</span><br>
      <span style="font-weight:bold;">Subject:</span>  <span style="color: rgb(177, 142, 30); font-weight: 500;">${values.subject}</span><br>
      <span style="font-weight:bold;">Address:</span>  <span style="color: rgb(177, 142, 30); font-weight: 500;">${values.address}</span>
    </p>
  `;

            Swal.fire({
                title: "Data added successfully!",
                html: htmlContent,
                icon: "success",
            });

            action.resetForm()
        }

    })


    return (
        <div className='d-flex align-items-center justify-content-center'>

            <Paper elevation={3} className='p-3 mx-3' sx={{ width: '470px', height: '600px', overflowY: 'auto' }}>
                <div className='px-3'>
                    <h4 className='mt-3 ' id='heading'>Student Registration</h4>
                    <div id='h-line'></div>
                </div>
                <Formik >
                    <Form className='px-3 mt-3' onSubmit={handleSubmit}>



                        <input type="text" name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} className='form-control ' placeholder='Enter your name' />
                        {errors.name && touched.name ? <p className='form-error'>{errors.name}</p> : null}
                        <input type="text" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} className='form-control  mt-3' placeholder='Email' />
                        {errors.email && touched.email && errors.email.length > 0 ? <p className='form-error'>{errors.email}</p> : null}
                        <input type="date" name='dob' onChange={handleChange} onBlur={handleBlur} value={values.dob} className='form-control my-3' />
                        {errors.dob && touched.dob ? <p className='form-error'>{errors.dob}</p> : null}
                        <input type="text" name='mobile' onChange={handleChange} onBlur={handleBlur} value={values.mobile} className='form-control mb-2' placeholder='Enter your mobile number' />
                        {errors.mobile && touched.mobile ? <p className='form-error '>{errors.mobile}</p> : null}

                        <label htmlFor="">Gender</label>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="gender"
                            onChange={handleChange}
                            value={values.gender}

                        >
                            <FormControlLabel value='female' control={<Radio />} label="Female" />
                            <FormControlLabel value='male' control={<Radio />} label="Male" />
                            <FormControlLabel value='other' control={<Radio />} label="Other" />

                        </RadioGroup>
                        {errors.gender && touched.gender ? <p className='form-error'>{errors.gender}</p> : null}



                        <select name="subject" onChange={handleChange} onBlur={handleBlur} value={values.subject} id="" className='form-control'  >
                            {
                                subjects.map(sub => (
                                    <option key={sub} value={sub}>{sub}</option>
                                ))
                            }
                        </select>
                        {errors.subject && touched.subject ? <p className='form-error'>{errors.subject}</p> : null}


                        <textarea name="address" placeholder='Address' onChange={handleChange} onBlur={handleBlur} value={values.address} className='form-control my-3' rows={4}>Address</textarea>
                        {errors.address && touched.address ? <p className='form-error'>{errors.address}</p> : null}
                        <div className='d-flex justify-content-between'>
                            <Button onClick={resetForm} id='cancel'>Cancel</Button>
                            <Button variant="contained" disabled={!isValid || !dirty} id='reg' type='submit'>Register</Button>
                        </div>




                    </Form>
                </Formik>


            </Paper>




        </div>
    )
}

export default RegistrationForm