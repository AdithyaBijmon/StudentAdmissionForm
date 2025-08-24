import React from 'react'
import Paper from '@mui/material/Paper';
import './App.css'
import { Form, Formik, useFormik } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { registerSchema } from './registrationSchema';
import swal from 'sweetalert';

const subjects = ['Biology', 'Computer Science', 'Commerce', 'Humanities']

function RegistrationForm() {

    const { values, handleSubmit, handleChange, errors, touched, handleBlur, resetForm } = useFormik({
        initialValues: {
            name: '',
            email: '',
            dob: '',
            gender: '',
            subject: '',
            address: ''
        },
        validationSchema: registerSchema,
        validateOnBlur: true,

        onSubmit: (values, action) => {
            // console.log(values);
            // console.log(errors)
            swal("Data added successfully!", `<p><b>Name:</b> <span style="color: #337ab7;">${values.name}</span></p>,
                 Email: ${values.email},
                 DOB: ${values.dob},
                 Gender: ${values.gender},
                 Subject: ${values.subject},
                 Address: ${values.address}`, "success");

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
                            <Button variant="contained" id='reg' type='submit'>Register</Button>
                        </div>




                    </Form>
                </Formik>


            </Paper>




        </div>
    )
}

export default RegistrationForm