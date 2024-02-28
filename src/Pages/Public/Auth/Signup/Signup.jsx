import React, { useState } from 'react';
import "./Signup.css";
import TextField from '@mui/material/TextField';
import { Button, Typography, IconButton, Grid } from '@mui/material';
import { GoogleLogin } from "@react-oauth/google";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; // Import VisibilityOffIcon
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Signup() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false); // State variable to track password visibility

    const onSuccess = (response) => {
        console.log("Login Successful:", response);
        // Send the access token to your backend for further processing
    };

    const onFailure = (error) => {
        console.error("Login Failed:", error);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState); // Toggle the state variable
    };

    const handleSignup = async() => {
        // You can access userData.firstName, userData.lastName, userData.email, and userData.password here
        var username = userData.firstName + " "+userData.lastName;
        if(userData.username!='' && userData.email!='' && userData.password!= ''){
            console.log(`${process.env.REACT_APP_API_URL}/auth/manual/signup`);
            // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`,{
            //     username : userData.username,
            //     email : userData.email,
            //     password : userData.password
            // })
            // console.log(res);
        }

        else{
            alert("All fields missing")
        }
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
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleInputChange}
                                style={{ marginBottom: "10px" }}
                                fullWidth
                                label="First name"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="lastName"
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleInputChange}
                                style={{ marginBottom: "10px" }}
                                fullWidth
                                label="Last name"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>

                    <TextField
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        style={{ marginBottom: "10px" }}
                        fullWidth
                        label="Enter email ID"
                        variant="filled"
                    />
                    <TextField
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        fullWidth
                        label="Enter password"
                        variant="filled"
                        type={showPassword ? "text" : "password"} // Conditionally set type based on showPassword state
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />} {/* Toggle visibility icon */}
                                </IconButton>
                            ),
                        }}
                    />
                </div>
                <div className='button-container'>
                    <Button variant='contained' fullWidth onClick={handleSignup}>
                        Signup
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
                <Typography variant='h8'>Already have an account?
                    <Button onClick={() => {
                        navigate('/login')
                    }}>
                        Login here
                    </Button>
                </Typography>
            </div>
        </div>
    );
}

export default Signup;
