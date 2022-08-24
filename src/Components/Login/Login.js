import React from "react";
import { Box, Paper, Grid, Typography, Button } from "@mui/material"
import { Formik, Form } from "formik";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import * as yup from "yup";

import InputFields from './InputFields'
import { login } from '../../Redux/Reducer'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = {
    Email: '',
    Password: '',
  }
  const validate = yup.object({
    Email: yup.string().required().email(),
    Password: yup.string().required().min(6),
  })

  const style = {
    box: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#91b8f3",
    },
    paper: {
      padding: "30px",
      margin: '20px',
      width: "30%",
      backgroundColor: "#21395f",
      fontFamily: "Sans-serif",
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    btn: {
      borderRadius: 2,
      border: 0,
      color: "white",
      padding: "8px",
      width: "80px",
      backgroundColor: "#4470b1",
    },
  };

  return (
    <Grid container style={style.box}>
      <Paper sx={style.paper} elevation={20}>
        <Grid container sx={style.grid}>
          <Typography variant="h4" sx={{ color: "#fffeff" }}>
            LOGIN FORM
          </Typography><br /><br /><br />

          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={(data) => {
              dispatch(
                login({
                  username: data.Email,
                  password: data.Password
                })
              )
              navigate('/')
            }}
          >
            {() => (
              <Form style={style.form}>
                <InputFields
                    name='Email'
                    label='User Email'
                    placeholder='Username'
                />
                <InputFields
                    name='Password'
                    label='User Password'
                    placeholder='Password'
                    type='password'
                />
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                  <Typography ariant="body2" sx={{ color: "#a3a8ab", display: 'flex', justifyContent: 'flex-end'}}>
                    Lost Password?
                  </Typography><br />

                  <Button type="submit" variant="contained" sx={style.btn}>
                    Login
                  </Button>
                </Box>
              </Form> 
            )}
          </Formik>
          <br />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
