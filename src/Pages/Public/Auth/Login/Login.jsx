import React from 'react';
import "./Login.css";
import TextField from '@mui/material/TextField';
import { Button, Typography, IconButton } from '@mui/material';
import { GoogleLogin } from "@react-oauth/google";
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();


    const onSuccess = (response) => {
        console.log("Login Successful:", response);
        // Send the access token to your backend for further processing

    };

    const onFailure = (error) => {
        console.error("Login Failed:", error);
    };

    return (
        <div className='container'>
            <div style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "90px"
            }}>
                <div className='Logo-container'>
                    <div className='text-font'>
                        𝓘𝓷𝓽𝓻𝓸𝓿𝓮𝓻𝓽
                    </div>
                </div>
                <div className='input-container'>
                    <TextField id="email-field" style={{ marginBottom: "10px" }} fullWidth label="Enter email ID" variant="filled" />
                    <TextField id="password-field" fullWidth label="Enter password" variant="filled"
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={() => console.log("Show password")}>
                                    <VisibilityIcon />
                                </IconButton>
                            ),
                        }} />
                </div>
                <div className='button-container'>
                    <Button variant='contained' fullWidth>
                        Login
                    </Button>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <GoogleLogin

                        buttonText="Login with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        scope="profile email" // Optional scopes for additional user information
                    />

                    <Button style={{
                        marginTop: "10px"
                    }}>
                        Forget Password
                    </Button>
                </div>
            </div>
            <div className="redirect-container" style={{
                textAlign: "center",
                border: "1px solid black",
                borderRadius: "10px",
                marginTop: "10px",
                width: "460px",
                padding: "10px"
            }}>
                <Typography variant='h8'>Don't have an account?
                    <Button onClick={() => {
                        navigate('/signup')
                    }}>
                        Signup here
                    </Button>
                </Typography>
            </div>
        </div>
    );
}

export default Login;
