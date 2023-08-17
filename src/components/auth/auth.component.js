import React, { useState } from 'react'
import './auth.component.css';
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { emailRegx, passwordRegex } from '../../utils/constant';
import SnackBarComponent from '../snack-bars/snackbar.component';
import { SignIn, SignUp } from '../../services/auth.service';

export default function AuthComponent() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [openSnakBar, setOpenSnakBar] = useState(false);
    const [snackbarType, setSnackbarType] = useState();
    const [snackBarMessage, setSnackBarMessage] = useState();

    const validateEmail = (email) => {
        return emailRegx.test(email);
    };

    const validatePassword = (password) => {
        return passwordRegex.test(password);
    };

    const handleSignUpClick = () => {
        setShowPassword(false);
        resetState();
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }

    const handleSignInClick = () => {
        setShowPassword(false);
        resetState();
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    const handleCreateNewAccount = async () => {
        if (fullName && email && password) {
            try {
                const firstName = fullName.split(' ').slice(0, 1).join('');
                const lastName = fullName.split(' ').slice(1).join(' ');
                const payload = { firstName, lastName, email, password };
                const data = await SignUp(payload);
                console.log('# signup data', data);
            } catch (error) {
                const err = error?.response?.data;
                console.log('# signup Error', err);
                setSnackbarType('error');
                setSnackBarMessage(err.message);
                setOpenSnakBar(true);

                setTimeout(() => {
                    setOpenSnakBar(false);
                }, 6000);
            }
        }
    }

    const handleSignIn = async () => {
        if (email && password) {
            const payload = { email, password };
            try {
                const { data } = await SignIn(payload);
                console.log('# login data', data);
            } catch (error) {
                console.log('# login Error', error);
            }
        }
    }

    const resetState = () => {
        setFullName('');
        setEmail('');
        setPassword('');
        setIsEmailValid(false);
        setIsPasswordValid(false);

        console.log('@ sss', fullName);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <div className='auth-container'>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <i className="social fab fa-facebook-f" />
                                <i className="social fab fa-google-plus-g" />
                                <i className="social fab fa-linkedin-in" />
                            </div>
                            <span>or use your email for registration</span>
                            <TextField
                                size="small"
                                type='text'
                                className='input'
                                id="outlined-basic-name"
                                label="Full Name"
                                variant="outlined"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <TextField
                                size="small"
                                type='email'
                                className='input'
                                id="outlined-basic-email"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setIsEmailValid(validateEmail(e.target.value));
                                }}
                            />
                            <TextField
                                size="small"
                                className='input'
                                type={showPassword ? 'text' : 'password'}
                                id="outlined-basic-password"
                                label="Password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setIsPasswordValid(validatePassword(e.target.value));
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }} />
                            <Button
                                type='button'
                                className='button'
                                variant="contained"
                                disabled={!isEmailValid || !isPasswordValid}
                                onClick={handleCreateNewAccount}
                            >
                                Sign Up</Button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <i className="social fab fa-facebook-f" />
                                <i className="social fab fa-google-plus-g" />
                                <i className="social fab fa-linkedin-in" />
                            </div>
                            <span>or use your account</span>
                            <TextField
                                size="small"
                                type='email'
                                className='input'
                                id="outlined-basic-p-email"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setIsEmailValid(validateEmail(e.target.value));
                                }}
                            />
                            <TextField
                                size="small"
                                className='input'
                                type={showPassword ? 'text' : 'password'}
                                id="outlined-basic-p-password"
                                label="Password"
                                value={password}
                                variant="outlined"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setIsPasswordValid(validatePassword(e.target.value));
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }} />
                            <a href="#">Forgot your password?</a>
                            <Button
                                type='button'
                                className='button'
                                variant="contained"
                                onClick={handleSignIn}
                            >Sign In</Button>

                            {/* <Button onClick={() => setEmail('')}>Reset</Button> */}
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info.</p>
                                <Button type='button' className='ghost' variant="contained" onClick={handleSignInClick}>Sign In</Button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Create new account and start journey with us.</p>
                                <Button type='button' className='ghost' variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SnackBarComponent
                openSnakBar={openSnakBar}
                type={snackbarType}
                message={snackBarMessage}
            />
        </>
    )
}
