import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './App.css'
import { Form, Formik, useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';


const subjects = ['Biology', 'Computer Science', 'Commerce', 'Humanities']

function RegistrationForm() {

    const {values,handleSubmit,handleChange} = useFormik({
        initialValues: {
            name: '',
            email: '',
            dob: '',
            gender: '',
            subject: '',
            address: ''
        },

        onSubmit: values => {
            // console.log(values);
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

            <Paper elevation={3} className='p-3 mx-3' sx={{ width: '450px', height: '550px' }}>
                <div className='px-3'>
                    <h4 className='mt-3 ' id='heading'>Student Registration</h4>
                    <div id='h-line'></div>
                </div>
                <Formik >
                    <Form className='px-3 mt-3' onSubmit={handleSubmit}>


                        <div className='d-flex '>
                            <input type="text" name='name' onChange={handleChange} value={values.name} className='form-control ' placeholder='Enter your name' />
                            <input type="text" name='email' onChange={handleChange} value={values.email} className='form-control ms-3 ' placeholder='Email' />
                        </div>

                        <input type="date" name='dob' onChange={handleChange} value={values.date} className='form-control my-3' />


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



                        <select name="subject"  onChange={handleChange} id="" className='form-control' >
                            {
                                subjects.map(sub => (
                                    <option key={sub} value={sub}>{sub}</option>
                                ))
                            }
                        </select>


                        <textarea name="address"  onChange={handleChange} value={values.address}  className='form-control my-3' rows={4}>Address</textarea>

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