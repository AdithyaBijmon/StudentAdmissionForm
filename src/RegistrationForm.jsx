import React from 'react'
import Paper from '@mui/material/Paper';
import './App.css'
import { Form, Formik, useFormik } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { registerSchema } from './registrationSchema';




const subjects = ['Biology', 'Computer Science', 'Commerce', 'Humanities']

function RegistrationForm() {

    const { values, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            dob: '',
            gender: '',
            subject: '',
            address: ''
        },
        validationSchema: registerSchema,

        onSubmit: values => {
            // console.log(values);
            console.log(errors)

            alert(
                `Data added Successfully✅
                Name:${values.name},
                 Email:${values.email},
                 DOB:${values.dob},
                 Gender:${values.gender},
                 Subject:${values.subject},
                 Address:${values.address},
                `
            )

        }
    })

    return (
        <div className='d-flex align-items-center justify-content-center'>

            <Paper elevation={3} className='p-3 mx-3' sx={{ width: '470px', height: '600px' }}>
                <div className='px-3'>
                    <h4 className='mt-3 ' id='heading'>Student Registration</h4>
                    <div id='h-line'></div>
                </div>
                <Formik >
                    <Form className='px-3 mt-3' onSubmit={handleSubmit}>



                        <input type="text" name='name' onChange={handleChange} value={values.name} className='form-control ' placeholder='Enter your name' />
                        {errors.name && touched.name ? <p className='form-error'>{errors.name}</p> : ''}
                        <input type="text" name='email' onChange={handleChange} value={values.email} className='form-control  mt-3' placeholder='Email' />
                        {errors.email && touched.email ? <p className='form-error'>{errors.email}</p> : null}
                        <input type="date" name='dob' onChange={handleChange} value={values.date} className='form-control my-3' />
                        {errors.dob && touched.dob ? <p className='form-error'>{errors.dob}</p> :null}

                        <label htmlFor="">Gender</label>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="gender"
                        >
                            <FormControlLabel onChange={handleChange} value='female' control={<Radio />} label="Female" />
                            <FormControlLabel onChange={handleChange} value='male' control={<Radio />} label="Male" />
                            <FormControlLabel onChange={handleChange} value='other' control={<Radio />} label="Other" />

                        </RadioGroup>
                        {errors.gender && touched.gender ? <p className='form-error'>{errors.gender}</p> :null}



                        <select name="subject" onChange={handleChange} id="" className='form-control' >
                            {
                                subjects.map(sub => (
                                    <option key={sub} value={sub}>{sub}</option>
                                ))
                            }
                        </select>
                        {errors.subject && touched.subject ? <p className='form-error'>{errors.subject}</p> :null}


                        <textarea name="address" placeholder='Address' onChange={handleChange} value={values.address} className='form-control my-3' rows={4}>Address</textarea>
                        {errors.address && touched.address ? <p className='form-error'>{errors.address}</p> :null}
                        <div className='d-flex justify-content-between'>
                            <Button id='cancel'>Cancel</Button>
                            <Button variant="contained" id='reg' type='submit'>Register</Button>
                        </div>




                    </Form>
                </Formik>


            </Paper>




        </div>
    )
}

export default RegistrationForm